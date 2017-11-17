var API_URL = '/videos.json';

document.addEventListener('DOMContentLoaded', function () {
  var site = document.querySelector('.videos');

  program.init(site);
});

/**
 * Bílaleit. Sækir gögn með Ajax á apis.is.
 */
var program = (function() {
  var container;

  /**
	 * Setur upp allar private breytur með því að nota querySelector
	 * Setur eventlistener á submit
	*/
  function init(site) {
  //  container = document.querySelector('.results');

    var request = new XMLHttpRequest();

    // sækir slóð með GET
    request.open('GET', API_URL, true);

    // Fall sem keyrir við svar frá vefþjón
    // request mun innihalda gögn um HTTP kall
    request.onload = function() {
        var data =JSON.parse(request.response);
        var x = "";
        var lengd2 = data.categories[1].videos.length;
        var tolur = data.categories[1].videos;
        console.log("lengd" +lengd2);
        console.log("tolur" + tolur);
        showHeading();

    /*    for (var i = 0; i < 4; i++) {
          showvideos(data.videos[i]);
        //  console.log(data.videos[i]);
      }*/
      /*  for (var i = 0; i < 3; i++) {
          showcate(data.categories[i]);
      //    console.log(data.categories[i]);
    } */  showcategories(data.categories[0]);
          for (var i = 0; i < 2; i++) {
          showvideos(data.videos[i]);
      }
          showBorder();
          showcategories(data.categories[1]);
          showvideos(data.videos[0]);
          showvideos(data.videos[2]);
          showvideos(data.videos[3]);

          showBorder();
          showcategories(data.categories[2]);
          for (var i = 1; i < 4; i++) {
          showvideos(data.videos[i]);
      }


    };
    request.send();

    function showHeading() {
      var section1 = document.createElement("section");
      section1.setAttribute("class", "heading");
      section1.setAttribute("style", "width:1200px;")
      document.querySelector("main").appendChild(section1);

      // býr til html texta í section1
      var headtext = document.createElement("h1");
      var text = document.createTextNode("Myndbandaleigan");
      headtext.setAttribute("style", "padding-bottom:20px;")
      headtext.appendChild(text);
      section1.appendChild(headtext);

    }
    function showvideos(data) {
      // býr til html section1
      var divAdal = document.createElement("div");
      divAdal.setAttribute("class", "videos");
      divAdal.setAttribute("style", "width:350px; margin-right:20px;")
      document.querySelector("main").appendChild(divAdal);

      // býr til container div fyrir Nýleg myndbönd
      var container = document.createElement("div");
      container.setAttribute("class", "nyleg");
    //  container.setAttribute("style", "float:left;min-width:300px;max-width:300px; margin-right:20px;")
      divAdal.appendChild(container);

      // býr til html img í dl
      var img = new Image();
      img.src = data.poster;
      img.style.width = '350px';
      container.appendChild(img);

      var timer = document.createElement("div")
      timer.className = "block-Timer";
      container.appendChild(timer);
      timer.innerHTML = data.duration;

      var ptitill = document.createElement('p');
      ptitill.setAttribute("style", "padding-bottom:50px;");
      var titill = document.createTextNode(data.title);
      ptitill.appendChild(titill);
      container.appendChild(ptitill);


    }
    function showcategories(data) {
      var section1 = document.createElement("section");
      section1.setAttribute("class", "categories");
      section1.setAttribute("style", "width:1200px;")
      document.querySelector("main").appendChild(section1);

      var container = document.createElement("div");
      container.setAttribute("class", "categor");
      section1.appendChild(container);

      // býr til html img í dl
      var dl = document.createElement('dl');

      var ddtitill = document.createElement('h2');
      ddtitill.setAttribute("style", "padding-bottom:20px;");
      var titill = document.createTextNode(data.title);

      for (var i = 0; i < data.videos.length; i++) {
        console.log(data.videos[i]);

      }
    //   console.log(data.videos[0]);

      ddtitill.appendChild(titill);

      dl.appendChild(ddtitill);



      container.appendChild(dl);
   }
   function showBorder() {
     var borderline = document.createElement("div");
     borderline.setAttribute("class", "border");
     borderline.setAttribute("style", "width:900px; margin:0 auto; border-top:solid rgb(255,255,255); padding-bottom:30px; padding-top:30px;");
     document.querySelector("main").appendChild(borderline);

   }
  }

  return {
    init: init
  }
})();


// video function

function videobuttons() {
/* Rewind takki*/
var rwndbtn = document.createElement('button');
var rwnd = document.createElement('img');

rwnd.src = ('img\\back.svg');
rwndbtn.appendChild(rwnd);
document.body.appendChild(rwndbtn);

rwndbtn.addEventListener('click', function () {
    video.currentTime -= 3;

});

/* Play takki */
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

/* Mute takki */
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

/* Fullscreen */
var fullbtn = document.createElement('button');
var fullscr = document.createElement('img');
fullscr.src = ('img\\fullscreen.svg')
fullbtn.appendChild(fullscr);
document.body.appendChild(fullbtn);

fullbtn.addEventListener('click', function () {
  video.requestFullScreen();
});

/* Rewind takki*/
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
