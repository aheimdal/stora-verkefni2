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

          showHeading();
          showcategories(data.categories[0]);
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
      divAdal.setAttribute("style", "width:365px; margin-right:20px; margin-bottom:20px;margin-top:20px;")
      document.querySelector("main").appendChild(divAdal);

      // býr til container div fyrir Nýleg myndbönd
      var container = document.createElement("div");
      container.setAttribute("class", "nyleg");
      container.setAttribute("style", "z-index:1; position:relative;")
      divAdal.appendChild(container);

      // býr til html img í dl
      var img = new Image();
      img.src = data.poster;
      img.setAttribute("style", "width:365px; max-width:365px; position:absolute; z-index:2;")
      container.appendChild(img);

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
      duration.setAttribute("style", "width:50px; position:absolute; z-index:999; right:5px; margin-top:170px;")
      duration.style.textAlign = 'center';
      duration.style.background = 'rgba(0, 0, 0, 0.5)';
      duration.appendChild(durtext);
      container.appendChild(duration);

      // býr til html titil myndbands undir mynd
      var ptitill = document.createElement('p');
      var titill = document.createTextNode(data.title);
      ptitill.setAttribute("style", "font-weight:bold; font-size:18px; padding-top:215px");
      ptitill.appendChild(titill);
      container.appendChild(ptitill);

      today=new Date();
      var todaysec = Math.round(today.getTime()/1000);

      var startDate = new Date(data.created); // Your timezone!
      var seconds = Math.round(startDate.getTime()/1000);
      var mismunur = Math.floor(todaysec-seconds);

    //  timeElapsed(mismunur);
      var year = 31536000;
      var month = 2592000;
      var week = 604800;
      var day = 60*60*24;
      var hour = 3600;

      if (year < mismunur) {
        var arum = Math.floor(mismunur/year);
        var parum = document.createElement('p');
        parum.setAttribute("style", "padding-bottom:50px; padding-top:5px;");
        if (arum > 1) {
        var parumtext = document.createTextNode("Fyrir " + parum +  " árum síðan");
      } else {
          var parumtext = document.createTextNode("Fyrir " + parum +  " ári síðan");
      }
        parum.appendChild(parumtext);
        container.appendChild(parum);

      } else if (month < mismunur) {
        var manudum = Math.floor(mismunur/month);
        var pmanudum = document.createElement('p');
        pmanudum.setAttribute("style", "padding-bottom:50px; padding-top:5px;");
        if (manudum > 1) {
        var pmanudumtext = document.createTextNode("Fyrir " + manudum +  " mánuðum síðan");
      } else {
        var pmanudumtext = document.createTextNode("Fyrir " + manudum +  " mánuði síðan");
      }
        pmanudum.appendChild(pmanudumtext);
        container.appendChild(pmanudum);

      } else if (week < mismunur) {
        var vikum = Math.floor(mismunur/week);
        var pvikum = document.createElement('p');
        pvikum.setAttribute("style", "padding-bottom:50px; padding-top:5px;");
        if (vikum > 1) {
        var pvikumtext = document.createTextNode("Fyrir " + vikum +  " vikum síðan");
      } else {
        var pvikumtext = document.createTextNode("Fyrir " + vikum +  " viku síðan");
      }
        pvikum.appendChild(pvikumtext);
        container.appendChild(pvikum);

      } else if (day < mismunur) {
        var dogum =  Math.floor(mismunur/day);
        var pdogum = document.createElement('p');
        pdogum.setAttribute("style", "padding-bottom:50px; padding-top:5px;");
        if (dogum > 1) {
        var pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      } else {
        var pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      }
        pdogum.appendChild(pdogumtext);
        container.appendChild(pdogum);

      } else {
        var klst =  Math.floor(mismunur/hour);
        var pklst = document.createElement('p');
        pklst.setAttribute("style", "padding-bottom:50px; padding-top:5px;");
        if (klst > 1) {
        var klsttext = document.createTextNode("Fyrir " + klst +  " klukkustundum síðan");
      } else {
        var klsttext = document.createTextNode("Fyrir " + klst +  " klukkustund síðan");
      }
        pklst.appendChild(pklsttext);
        container.appendChild(pklst);
      }

    }

    function showcategories(data) {
      var section1 = document.createElement("section");
      section1.setAttribute("class", "categories");
      section1.setAttribute("style", "width:1200px;")
      document.querySelector("main").appendChild(section1);

      var container = document.createElement("div");
      container.setAttribute("class", "categor");
      section1.appendChild(container);

      // býr til html titil flokka
      var dl = document.createElement('dl');
      var ddtitill = document.createElement('h2');
      ddtitill.setAttribute("style", "padding-bottom:0px;");
      var titill = document.createTextNode(data.title);
      ddtitill.appendChild(titill);
      dl.appendChild(ddtitill);

      container.appendChild(dl);
   }


   function showBorder() {
     var borderline = document.createElement("div");
     borderline.setAttribute("class", "border");
     borderline.setAttribute("style", "width:900px; margin:0 auto; border-top:solid #eee; padding-bottom:20px; padding-top:30px;");
     document.querySelector("main").appendChild(borderline);
   }

  /* function timeElapsed(mismunur) {
     var year = 31536000;
     var month = 2592000;
     var week = 604800;
     var day = 60*60*24;
     var hour = 3600;

     if (year < mismunur) {
       console.log("hæ");
     } else if (month < mismunur) {
       console.log("Fyrir X mánuði/mánuðum síðan");
     } else if (week < mismunur) {
       console.log("Fyrir X viku/vikum síðan");
     } else if (day < mismunur) {
       console.log("Fyrir X degi/dögum síðan");
     } else {
       console.log("Fyrir X klukkustund/um síðan");
     }
   }*/
  }

  return {
    init: init
  }
})();
