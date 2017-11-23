const API_URL = 'videos.json?id=';

/* býr til html fyrir villuskilaboð */
function showHeading() {
  const section1 = document.createElement('section');
  section1.setAttribute('class', 'leigan_video');
  document.querySelector('main').appendChild(section1);

  const headtext = document.createElement('h1');
  const text = document.createTextNode('Myndbandaleigan');
  headtext.setAttribute('class', 'myndbandaleigan_video');
  headtext.appendChild(text);
  section1.appendChild(headtext);
}
/*
* Fall sem býr til html fyrir video sem birtist þegar það er valið á aðalsíðu
* index.html
*/
function videos(data) {
  /* Heiti myndbands */
  var text = document.createTextNode(data.title);
  const section1 = document.createElement('section');
  section1.setAttribute('class', 'heading');
  document.querySelector('main').appendChild(section1);

  const headtext = document.createElement('h1');
  headtext.setAttribute('class', 'head');
  headtext.appendChild(text);
  section1.appendChild(headtext);

  const sectionvid = document.createElement('section');
  sectionvid.setAttribute('class', 'sectionvid');
  document.querySelector('main').appendChild(sectionvid);

  const divvid = document.createElement('div');
  divvid.setAttribute('class', 'divvid');
  sectionvid.appendChild(divvid);

  /* Video */
  const video = document.createElement('video');
  video.setAttribute('class', 'video');
  divvid.appendChild(video);
  video.src = data.video;

  divvid.appendChild(video);

  /* Pic overlay */
  const picover = document.createElement('div');
  picover.setAttribute('class', 'cover');
  const pic = document.createElement('img');
  pic.src = data.poster;
  pic.setAttribute('class', 'mynd');
  picover.appendChild(pic);
  divvid.appendChild(picover);
  let plagg = true;

  /* takkar */
  const sectbutt = document.createElement('section');
  sectbutt.setAttribute('class', 'sectbutt');
  document.querySelector('main').appendChild(sectbutt);

  /* Rewind takki */
  const rwndbtn = document.createElement('span');
  rwndbtn.setAttribute('class', 'takkar');
  const rwnd = document.createElement('img');
  rwnd.setAttribute('class', 'pictakki');
  rwnd.src = ('img/back.svg');
  rwndbtn.appendChild(rwnd);
  sectbutt.appendChild(rwndbtn);
  rwndbtn.addEventListener('click', () => {
    video.currentTime -= 3;
  });

  /* Play takki */
  const playbtn = document.createElement('span');
  playbtn.setAttribute('class', 'takkar');
  const play = document.createElement('img');
  play.setAttribute('class', 'pictakki');
  play.src = ('img/play.svg');
  playbtn.appendChild(play);
  sectbutt.appendChild(playbtn);

  /* play takki, overlay */
  const overbtn = document.createElement('span');
  const over = document.createElement('img');
  over.setAttribute('class', 'pictakki');
  overbtn.setAttribute('class', 'vidbtn');
  divvid.appendChild(overbtn);
  over.src = ('img/play.svg');
  overbtn.appendChild(over);

  playbtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playbtn.removeChild(playbtn.firstChild);
      overbtn.removeChild(overbtn.firstChild);
      if (plagg === true) {
        picover.removeChild(picover.firstChild);
        plagg = false;
      }
      const pause = document.createElement('img');
      pause.setAttribute('class', 'pictakki');
      pause.src = ('img/pause.svg');
      playbtn.appendChild(pause);
    } else {
      video.pause();
      playbtn.removeChild(playbtn.firstChild);
      let play = document.createElement('img');
      play.setAttribute('class', 'pictakki');
      play.src = ('img/play.svg');
      playbtn.appendChild(play);

      let over = document.createElement('img');
      over.setAttribute('class', 'pictakki');
      overbtn.setAttribute('class', 'vidbtn');
      divvid.appendChild(overbtn);
      over.src = ('img/play.svg');
      overbtn.appendChild(over);
    }
  });

  /* play takki, overlay process */
  overbtn.addEventListener('click', () => {
    overbtn.removeChild(overbtn.firstChild);
    video.play();

    playbtn.removeChild(playbtn.firstChild);
    if (plagg === true) {
      picover.removeChild(picover.firstChild);
      plagg = false;
    }
    const pause = document.createElement('img');
    pause.setAttribute('class', 'pictakki');
    pause.src = ('img/pause.svg');
    playbtn.appendChild(pause);
  });

  /* Mute takki */
  const mutebtn = document.createElement('span');
  mutebtn.setAttribute('class', 'takkar');
  const mute = document.createElement('img');
  mute.setAttribute('class', 'pictakki');
  mute.src = ('img/mute.svg');
  mutebtn.appendChild(mute);
  sectbutt.appendChild(mutebtn);

  mutebtn.addEventListener('click', () => {
    if (video.muted == false) {
      video.muted = true;
      mutebtn.removeChild(mutebtn.firstChild);
      const unmute = document.createElement('img');
      unmute.setAttribute('class', 'pictakki');
      unmute.src = ('img/unmute.svg');
      mutebtn.appendChild(unmute);
    } else {
      video.muted = false;
      mutebtn.removeChild(mutebtn.firstChild);
      const mute = document.createElement('img');
      mute.setAttribute('class', 'pictakki');
      mute.src = ('img/mute.svg');
      mutebtn.appendChild(mute);
    }
  });

  /* Fullscreen */
  const fullbtn = document.createElement('span');
  fullbtn.setAttribute('class', 'takkar');
  const fullscr = document.createElement('img');
  fullscr.setAttribute('class', 'pictakki');
  fullscr.src = ('img/fullscreen.svg');
  fullbtn.appendChild(fullscr);
  sectbutt.appendChild(fullbtn);

  fullbtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });

  /* Rewind takki */
  const nextbtn = document.createElement('span');
  nextbtn.setAttribute('class', 'takkar');
  const next = document.createElement('img');
  next.setAttribute('class', 'pictakki');
  next.src = ('img/next.svg');
  nextbtn.appendChild(next);
  sectbutt.appendChild(nextbtn);

  nextbtn.addEventListener('click', () => {
    video.currentTime += 3;
  });

  const footer1 = document.createElement('section');
  footer1.setAttribute('class', 'footer');
  document.querySelector('main').appendChild(footer1);

  const foottext = document.createElement('a');
  var text = document.createTextNode('Til Baka');
  foottext.setAttribute('class', 'tilbaka');
  foottext.setAttribute('href', 'index.html');
  foottext.appendChild(text);
  footer1.appendChild(foottext);
}
/*
* Fall sem sækir gögn í videos.json og birtir það myndband sem valið var á index.html
* birtir viðeigandi myndband þegar id er breytt í urli og villuskilaboð ef ekki
* er til myndband með því id-i sem slegið er inn í urlinu
*/
function allt() {
  const request = new XMLHttpRequest();
  // sækir slóð með GET
  request.open('GET', API_URL + sessionStorage.getItem('Id'), true);

  request.onload = () => {
    const data = JSON.parse(request.response);

    const videoslength = data.videos.length;

    const urlid = location.search;
    const aftasti = urlid.substr(-1);
    let found = false;

    for (let i = 0; i < videoslength; i += 1) {
      if (aftasti == data.videos[i].id) {
        found = true;
      }
    }

    if (!found) {
      showHeading();

      const villudiv = document.createElement('div');
      villudiv.setAttribute('class', 'videoekkitil');
      document.querySelector('main').appendChild(villudiv);

      const villa = document.createElement('p');
      const villutext = document.createTextNode('Videó er ekki til');
      villa.setAttribute('class', 'villahlada');
      villa.appendChild(villutext);
      villudiv.appendChild(villa);
    } else {
      for (let i = 0; i < videoslength; i += 1) {
        if (aftasti == data.videos[i].id) {
          videos(data.videos[i]);
        }
      }
    }
  };
  request.send();
}

allt();
