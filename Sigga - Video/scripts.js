
var video = document.querySelector('video');

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
  var elem = document.getElementById("video");
    if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
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


}

videobuttons();
