


function video() {

// Header
    var section1 = document.createElement("section");
    section1.setAttribute("class", "heading");
    section1.setAttribute("style", "width:1200px;");
    document.querySelector("main").appendChild(section1);


    var headtext = document.createElement("h1");
    var text = document.createTextNode("Big Bunny");
    headtext.setAttribute("style", "padding-bottom:10px;");
    headtext.appendChild(text);
    section1.appendChild(headtext);

// Video section
  var sectionvid = document.createElement("section");
  sectionvid.setAttribute("class", "sectionvid");
  var video = document.createElement("video");
  video.setAttribute("class","video");
  document.body.appendChild(video);
  video.src = 'videos/bunny.mp4';

  document.querySelector("main").appendChild(sectionvid);
  sectionvid.appendChild(video);

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
sectionvid.appendChild(overbtn);
over.src = ('img/play.svg')
overbtn.appendChild(over);


playbtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playbtn.removeChild(playbtn.firstChild);
    overbtn.removeChild(overbtn.firstChild);
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
    sectionvid.appendChild(overbtn);
    over.src = ('img/play.svg')
    overbtn.appendChild(over);
  }
});

// play takki, overlay process
overbtn.addEventListener('click', function () {
    overbtn.removeChild(overbtn.firstChild);
    video.play();

    playbtn.removeChild(playbtn.firstChild);
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
footer1.setAttribute("style", "width:1200px;");
document.querySelector("main").appendChild(footer1);

var foottext = document.createElement("p");
var text = document.createTextNode("Til Baka");
foottext.setAttribute("style", "padding-bottom:10px;");
foottext.appendChild(text);
footer1.appendChild(foottext);

}

video();
