var API_URL = '/videos.json?id=';

function allt() {


  var id = sessionStorage.getItem('Id');
  console.log("Mynd nr. : "+sessionStorage.getItem('Id'));
  //  var gildi = JSON.parse(sessionStorage.gildi);
  console.log("Myndin er númer: "+id);


  var request = new XMLHttpRequest();

  // sækir slóð með GET
  request.open('GET', API_URL+sessionStorage.getItem('Id'), true);

  request.onload = function() {
    var data =JSON.parse(request.response);

    var videoslength = data.videos.length;
    console.log(videoslength);
    console.log("data"+data);

    for (var i = 0; i < videoslength; i++) {
      if (sessionStorage.getItem('Id') == data.videos[i].id) {
        video(data.videos[i]);
  }
}


  };
  request.send();



  function video(data) {


  // Header
      var section1 = document.createElement("section");
      section1.setAttribute("class", "heading");
      document.querySelector("main").appendChild(section1);

      // býr til html texta í section1
      var headtext = document.createElement("h1");
      var text = document.createTextNode(data.title);
      headtext.setAttribute("class", "headbunny");
      headtext.appendChild(text);
      section1.appendChild(headtext);

    var sectionvid = document.createElement("section");
    sectionvid.setAttribute("class", "sectionvid");
    document.querySelector("main").appendChild(sectionvid);

    var divvid = document.createElement("div");
    divvid.setAttribute("class", "divvid");
    sectionvid.appendChild(divvid);

  // Video
  var video = document.createElement("video");
video.setAttribute("class","video");
divvid.appendChild(video);
video.src = data.video;

//document.querySelector("main").appendChild(divvid);
divvid.appendChild(video);

//var container = document.createElement("div");
//divvid.appendChild(container);



  // Pic overlay
  var picover = document.createElement('div');
  picover.setAttribute("class", "cover");
  var pic = document.createElement('img');
  pic.src = data.poster;
  pic.setAttribute("class", "mynd");
  picover.appendChild(pic);
  divvid.appendChild(picover);


    // takkar
    var sectbutt = document.createElement("section");
    sectbutt.setAttribute("class", "sectbutt");

    document.querySelector("main").appendChild(sectbutt);
    /* Rewind takki*/
    var rwndbtn = document.createElement('button');
    rwndbtn.setAttribute('class','takkar');
    var rwnd = document.createElement('img');
    rwnd.src = ('img/back.svg');
    rwndbtn.appendChild(rwnd);
    sectbutt.appendChild(rwndbtn);
    rwndbtn.addEventListener('click', function () {
        video.currentTime -= 3;

    });

    // Play takki
    var playbtn = document.createElement('button');
    playbtn.setAttribute('class','takkar');
    var play = document.createElement('img');
    play.src = ('img/play.svg')
    playbtn.appendChild(play);
    sectbutt.appendChild(playbtn);

    // play takki, overlay
    var overbtn = document.createElement('button');
    var over = document.createElement('img');
    overbtn.setAttribute('class','vidbtn');
    divvid.appendChild(overbtn);
    over.src = ('img/play.svg')
    overbtn.appendChild(over);


    playbtn.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playbtn.removeChild(playbtn.firstChild);
        overbtn.removeChild(overbtn.firstChild);
        picover.removeChild(picover.firstChild);

        var pause = document.createElement('img');
        pause.src = ('img/pause.svg')
        playbtn.appendChild(pause);
      } else {
        video.pause();
        playbtn.removeChild(playbtn.firstChild);
        var play = document.createElement('img');
        play.src = ('img/play.svg')
        playbtn.appendChild(play);

        var over = document.createElement('img');
        overbtn.setAttribute('class','vidbtn');
        divvid.appendChild(overbtn);
        over.src = ('img/play.svg')
        overbtn.appendChild(over);
      }
    });

    // play takki, overlay process
    overbtn.addEventListener('click', function () {
        overbtn.removeChild(overbtn.firstChild);
        video.play();

        playbtn.removeChild(playbtn.firstChild);
        picover.removeChild(picover.firstChild);
        var pause = document.createElement('img');
        pause.src = ('img/pause.svg')
        playbtn.appendChild(pause);
    });

    // Mute takki
    var mutebtn = document.createElement('button');
    mutebtn.setAttribute('class','takkar');
    var mute = document.createElement('img');
    mute.src = ('img/mute.svg')
    mutebtn.appendChild(mute);
    sectbutt.appendChild(mutebtn);

    mutebtn.addEventListener('click', function () {
      if (video.muted == false) {
        video.muted = true;
        mutebtn.removeChild(mutebtn.firstChild);
        var unmute = document.createElement('img');
        unmute.src = ('img/unmute.svg')
        mutebtn.appendChild(unmute);
      } else {
        video.muted = false;
        mutebtn.removeChild(mutebtn.firstChild);
        var mute = document.createElement('img');
        mute.src = ('img/mute.svg')
        mutebtn.appendChild(mute);
      }
    });

    // Fullscreen
    var fullbtn = document.createElement('button');
    fullbtn.setAttribute('class','takkar');
    var fullscr = document.createElement('img');
    fullscr.src = ('img/fullscreen.svg')
    fullbtn.appendChild(fullscr);
    sectbutt.appendChild(fullbtn);

    fullbtn.addEventListener('click', function () {
      var elem = document.getElementById("video");
        if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
    });

    // Rewind takki
    var nextbtn = document.createElement('button');
    nextbtn.setAttribute('class','takkar');
    var next = document.createElement('img');
    next.src = ('img/next.svg')
    nextbtn.appendChild(next);
    sectbutt.appendChild(nextbtn);

    nextbtn.addEventListener('click', function () {
        video.currentTime += 3;
    });
    var footer1 = document.createElement("section");
    footer1.setAttribute("class", "footer");
    document.querySelector("main").appendChild(footer1);

    var foottext = document.createElement("a");
    var text = document.createTextNode("Til Baka");
    foottext.setAttribute("class", "tilbaka");
    foottext.setAttribute("href", "index.html");
    foottext.appendChild(text);
    footer1.appendChild(foottext);
  }

  }

  allt();

  // Til baka
/*  var footer1 = document.createElement("section");
  footer1.setAttribute("class", "footer");
  footer1.setAttribute("style", "width:1200px;");
  document.querySelector("main").appendChild(footer1);

  var foottext = document.createElement("a");
  var text = document.createTextNode("Til Baka");
  foottext.setAttribute("class", "tilbaka");
  foottext.setAttribute("style", "padding-bottom:10px;");
  foottext.setAttribute("href", "index.html");
  foottext.appendChild(text);
  footer1.appendChild(foottext);*/
