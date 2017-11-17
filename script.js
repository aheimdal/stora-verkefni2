var API_URL = '/videos.json';

document.addEventListener('DOMContentLoaded', function () {
  var site = document.querySelector('.videos');

  program.init(site);
});

/**
 * Sækir gögn með Ajax í json skrá
 */
var program = (function() {
  var container;

  /**
	 *
	 *
	*/
  function init(site) {

    var request = new XMLHttpRequest();

    // sækir slóð með GET
    request.open('GET', API_URL, true);

    /* Fall sem keyrir við svar frá vefþjón
    * request mun innihalda gögn um HTTP kall
    * kallar á föll sem búa til html síðunnar
    */
    request.onload = function() {
          var data =JSON.parse(request.response);
          var videoslength = data.videos.length;
          console.log(videoslength);
          var catvideoslength1 = data.categories[0].videos.length;
          var catvideoslength2 = data.categories[1].videos.length;
          var catvideoslength3 = data.categories[2].videos.length;
          var catefylki1 = data.categories[0].videos;
          var catefylki2 = data.categories[1].videos;
          var catefylki3 = data.categories[2].videos;
          console.log(catvideoslength1);
          console.log(catvideoslength2);
          console.log(catvideoslength3);
          console.log(catefylki1);
          console.log(catefylki2);
          console.log(catefylki3);

          showHeading();
          showcategories(data.categories[0]);
          //for (var i = 0; i < 2; i++) {
            for (var i = 0; i < catvideoslength1; i++) {
              showvideos(data.videos[i]);
            }
          showBorder();
          showcategories(data.categories[1]);

          showvideos(data.videos[0]);
          showvideos(data.videos[2]);
          showvideos(data.videos[3]);

          showBorder();
          showcategories(data.categories[2]);
            for (var i = 0; i < catvideoslength3; i++) {
              showvideos(data.videos[i]);
          }
    };
    request.send();

    /*
    * Fall sem býr til aðalfyrirsögn með html
    */
    function showHeading() {
      var section1 = document.createElement("section");
      section1.setAttribute("class", "leigan");
      document.querySelector("main").appendChild(section1);

      var headtext = document.createElement("h1");
      var text = document.createTextNode("Myndbandaleigan");
      headtext.setAttribute("class", "myndbandaleigan");
      headtext.appendChild(text);
      section1.appendChild(headtext);

    }

    /*
    * Fall sem býr til fyrirsagnir flokka með html
    */
    function showcategories(data) {
      var section1 = document.createElement("section");
      section1.setAttribute("class", "categories");
      document.querySelector("main").appendChild(section1);

      var container = document.createElement("div");
      container.setAttribute("class", "categor");
      section1.appendChild(container);

      var cattitill = document.createElement('h2');
      cattitill.setAttribute("class", "categoriestitill");
      var titill = document.createTextNode(data.title);
      cattitill.appendChild(titill);
      container.appendChild(cattitill);
   }

   /*
   * Fall sem býr til línu á milli flokka með html
   */
   function showBorder() {
     var border = document.createElement("div");
     border.setAttribute("class", "border");
     document.querySelector("main").appendChild(border);
   }

    /*
    * Fall sem býr til myndir af videoum með titli, aldri videos og lengd með html
    * Fallið reiknar út úr epoch tíma hve langt er síðan video var sett inn.
    * Fallið reiknar út lengd videos.
    */
    function showvideos(data) {

      var section = document.createElement("section");
      section.setAttribute("class", "videos");
      document.querySelector("main").appendChild(section);

      var container = document.createElement("div");
      container.setAttribute("class", "flokkar");
      section.appendChild(container);

      var img = document.createElement("IMG");
      img.src = data.poster;
      img.setAttribute("class", "image");
      container.appendChild(img);

      // reiknar út lengd videos í mínútum og sekúndum
      // út frá gefnum tíma í sekúndum
      var dur = data.duration;
      var min = Math.floor(dur/60);
      var sec = dur%60;
      var duration = document.createElement('div');
      if (sec < 10) {
        sec = "0"+sec;
      }
      if (min < 10) {
        min = "0"+min;
      }
      var durtext = document.createTextNode(min+":"+sec);
      duration.setAttribute("class", "duration");
      duration.appendChild(durtext);
      container.appendChild(duration);

      var ptitill = document.createElement('p');
      var titill = document.createTextNode(data.title);
      ptitill.setAttribute("class", "titill");
      ptitill.appendChild(titill);
      container.appendChild(ptitill);

      // reiknar út hve langt er liðið síðan videoið var sett inn
      // út frá epoch timestamp
      today=new Date();
      var todaysec = Math.round(today.getTime()/1000);
      var startDate = new Date(data.created); // Your timezone!
      var seconds = Math.round(startDate.getTime()/1000);
      var mismunur = Math.floor(todaysec-seconds);

      var year = 31536000;
      var month = 2592000;
      var week = 604800;
      var day = 60*60*24;
      var hour = 3600;

      // ár
      if (year < mismunur) {
        var arum = Math.floor(mismunur/year);
        var parum = document.createElement('p');
        parum.setAttribute("class", "lidinn");
        if (arum > 1) {
        var parumtext = document.createTextNode("Fyrir " + parum +  " árum síðan");
      } else {
          var parumtext = document.createTextNode("Fyrir " + parum +  " ári síðan");
      }
        parum.appendChild(parumtext);
        container.appendChild(parum);

      // mánuðir
      } else if (month < mismunur) {
        var manudum = Math.floor(mismunur/month);
        var pmanudum = document.createElement('p');
        pmanudum.setAttribute("class", "lidinn");
        if (manudum > 1) {
        var pmanudumtext = document.createTextNode("Fyrir " + manudum +  " mánuðum síðan");
      } else {
        var pmanudumtext = document.createTextNode("Fyrir " + manudum +  " mánuði síðan");
      }
        pmanudum.appendChild(pmanudumtext);
        container.appendChild(pmanudum);

      // vikur
      } else if (week < mismunur) {
        var vikum = Math.floor(mismunur/week);
        var pvikum = document.createElement('p');
        pvikum.setAttribute("class", "lidinn");
        if (vikum > 1) {
        var pvikumtext = document.createTextNode("Fyrir " + vikum +  " vikum síðan");
      } else {
        var pvikumtext = document.createTextNode("Fyrir " + vikum +  " viku síðan");
      }
        pvikum.appendChild(pvikumtext);
        container.appendChild(pvikum);

      // dagar
      } else if (day < mismunur) {
        var dogum =  Math.floor(mismunur/day);
        var pdogum = document.createElement('p');
        pdogum.setAttribute("class", "lidinn");
        if (dogum > 1) {
        var pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      } else {
        var pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      }
        pdogum.appendChild(pdogumtext);
        container.appendChild(pdogum);

      // klukkustundir
      } else {
        var klst =  Math.floor(mismunur/hour);
        var pklst = document.createElement('p');
        pklst.setAttribute("class", "lidinn");
        if (klst > 1) {
        var klsttext = document.createTextNode("Fyrir " + klst +  " klukkustundum síðan");
      } else {
        var klsttext = document.createTextNode("Fyrir " + klst +  " klukkustund síðan");
      }
        pklst.appendChild(pklsttext);
        container.appendChild(pklst);
      }
    }
  }

  return {
    init: init
  }
})();

/*
// video function

function videobuttons() {
// Rewind takki
var rwndbtn = document.createElement('button');
var rwnd = document.createElement('img');

rwnd.src = ('img\\back.svg');
rwndbtn.appendChild(rwnd);
document.body.appendChild(rwndbtn);

rwndbtn.addEventListener('click', function () {
    video.currentTime -= 3;

});

// Play takki
var playbtn = document.createElement('button');
var play = document.createElement('img');
play.src = ('img\\play.svg')
playbtn.appendChild(play);
document.body.appendChild(playbtn);

playbtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playbtn.removeChild(playbtn.firstChild);
    var pause = document.createElement('img');
    pause.src = ('img\\pause.svg')
    playbtn.appendChild(pause);
  } else {
    video.pause();
    playbtn.removeChild(playbtn.firstChild);
    var play = document.createElement('img');
    play.src = ('img\\play.svg')
    playbtn.appendChild(play);
  }
});

// Mute takki
var mutebtn = document.createElement('button');
var mute = document.createElement('img');
mute.src = ('img\\mute.svg')
mutebtn.appendChild(mute);
document.body.appendChild(mutebtn);

mutebtn.addEventListener('click', function () {
  if (video.muted == false) {
    video.muted = true;
    mutebtn.removeChild(mutebtn.firstChild);
    var unmute = document.createElement('img');
    unmute.src = ('img\\unmute.svg')
    mutebtn.appendChild(unmute);
  } else {
    video.muted = false;
    mutebtn.removeChild(mutebtn.firstChild);
    var mute = document.createElement('img');
    mute.src = ('img\\mute.svg')
    mutebtn.appendChild(mute);
  }
});

// Fullscreen
var fullbtn = document.createElement('button');
var fullscr = document.createElement('img');
fullscr.src = ('img\\fullscreen.svg')
fullbtn.appendChild(fullscr);
document.body.appendChild(fullbtn);

fullbtn.addEventListener('click', function () {
  video.requestFullScreen();
});

// Rewind takki
var nextbtn = document.createElement('button');
var next = document.createElement('img');
next.src = ('img\\next.svg')
nextbtn.appendChild(next);
document.body.appendChild(nextbtn);

nextbtn.addEventListener('click', function () {
    video.currentTime += 3;
});
}

function myndband() {
var video = document.querySelector('video');

videobuttons();
}
*/
