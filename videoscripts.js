const API_URL = '/videos.json?id=';

function allt() {

/*  var link = document.getElementsByTagName('href');
  console.log("link: "+link);*/

  let id = sessionStorage.getItem('Id');
  console.log("Mynd nr. : "+sessionStorage.getItem('Id'));
  //  var gildi = JSON.parse(sessionStorage.gildi);
  console.log("Myndin er númer: "+id);

  //var oldlocation = location;
//  location = (location+sessionStorage.getItem('Id'));
//  alert(location.pathname);
//  alert(location.search);
//  alert(location+sessionStorage.getItem('Id'));



  const request = new XMLHttpRequest();

  // sækir slóð með GET
  request.open('GET', API_URL+sessionStorage.getItem('Id'), true);

  request.onload = function() {
    let data =JSON.parse(request.response);

    const videoslength = data.videos.length;
    console.log(videoslength);
    console.log("data"+data);



  /*  for (var i = 0; i < videoslength; i++) {
    for (let i = 0; i < videoslength; i++) {

      if (sessionStorage.getItem('Id') == data.videos[i].id) {
        video(data.videos[i]);
  }
}*/
var urlid = location.search;
var aftasti = urlid.substr(-1);
var found = false;
//alert(aftasti);
for (var i = 0; i < videoslength; i++) {
  if (aftasti == data.videos[i].id) {
  //  clearAll();
  found = true;
  // video(data.videos[i]);

}
}
if (!found) {
  showHeading();
  var villudiv = document.createElement("div");
  villudiv.setAttribute("class", "videoekkitil");
  document.querySelector("main").appendChild(villudiv);

  var villa = document.createElement("p");
  var villutext = document.createTextNode("Videó er ekki til");
  villa.setAttribute("class", "villahlada");
  villa.appendChild(villutext);
  villudiv.appendChild(villa);

} else {
  for (var i = 0; i < videoslength; i++) {
    if (aftasti == data.videos[i].id) {
  video(data.videos[i]);

}

}
/*else {
  showHeading();
  var villudiv = document.createElement("div");
  villudiv.setAttribute("class", "videoekkitil");
  document.querySelector("main").appendChild(villudiv);

  var villa = document.createElement("p");
  var villutext = document.createTextNode("Videó er ekki til");
  villa.setAttribute("class", "villahlada");
  villa.appendChild(villutext);
  villudiv.appendChild(villa);
}*/
}


  };

  request.onerror = function() {
      showHeading();
      var villudiv = document.createElement("div");
      villudiv.setAttribute("class", "videoekkitil");
      document.querySelector("main").appendChild(villudiv);

      var villa = document.createElement("p");
      var villutext = document.createTextNode("Videó er ekki til");
      villa.setAttribute("class", "villahlada");
      villa.appendChild(villutext);
      villudiv.appendChild(villa);
  };
  request.send();

  function showHeading() {
    var section1 = document.createElement("section");
    section1.setAttribute("class", "leigan_video");
    document.querySelector("main").appendChild(section1);

    var headtext = document.createElement("h1");
    var text = document.createTextNode("Myndbandaleigan");
    headtext.setAttribute("class", "myndbandaleigan_video");
    headtext.appendChild(text);
    section1.appendChild(headtext);

  }

  function video(data) {


  // Header
      let section1 = document.createElement("section");
      section1.setAttribute("class", "heading");
      document.querySelector("main").appendChild(section1);

      // býr til html texta í section1
      let headtext = document.createElement("h1");
      var text = document.createTextNode(data.title);
      headtext.setAttribute("class", "head");
      headtext.appendChild(text);
      section1.appendChild(headtext);

    const sectionvid = document.createElement("section");
    sectionvid.setAttribute("class", "sectionvid");
    document.querySelector("main").appendChild(sectionvid);

    const divvid = document.createElement("div");
    divvid.setAttribute("class", "divvid");
    sectionvid.appendChild(divvid);

  // Video
  const video = document.createElement("video");
video.setAttribute("class","video");
divvid.appendChild(video);
video.src = data.video;

//document.querySelector("main").appendChild(divvid);
divvid.appendChild(video);

//var container = document.createElement("div");
//divvid.appendChild(container);



  // Pic overlay
  let picover = document.createElement('div');
  picover.setAttribute("class", "cover");
  let pic = document.createElement('img');
  pic.src = data.poster;
  pic.setAttribute("class", "mynd");
  picover.appendChild(pic);
  divvid.appendChild(picover);
  var plagg = true;

    // takkar
    const sectbutt = document.createElement("section");
    sectbutt.setAttribute("class", "sectbutt");

    document.querySelector("main").appendChild(sectbutt);
    /* Rewind takki*/
    const rwndbtn = document.createElement('button');
    rwndbtn.setAttribute('class','takkar');
    const rwnd = document.createElement('img');
    rwnd.setAttribute('class','pictakki');
    rwnd.src = ('img/back.svg');
    rwndbtn.appendChild(rwnd);
    sectbutt.appendChild(rwndbtn);
    rwndbtn.addEventListener('click', function () {
        video.currentTime -= 3;

    });

    // Play takki
    const playbtn = document.createElement('button');
    playbtn.setAttribute('class','takkar');
    const play = document.createElement('img');
    play.setAttribute('class','pictakki');
    play.src = ('img/play.svg')
    playbtn.appendChild(play);
    sectbutt.appendChild(playbtn);

    // play takki, overlay
    const overbtn = document.createElement('button');
    const over = document.createElement('img');
    over.setAttribute('class','pictakki');
    overbtn.setAttribute('class','vidbtn');
    divvid.appendChild(overbtn);
    over.src = ('img/play.svg')
    overbtn.appendChild(over);


    playbtn.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playbtn.removeChild(playbtn.firstChild);
        overbtn.removeChild(overbtn.firstChild);
        if (plagg == true) {
            picover.removeChild(picover.firstChild);
            plagg = false;
          }

        let pause = document.createElement('img');
        pause.setAttribute('class','pictakki');
        pause.src = ('img/pause.svg')
        playbtn.appendChild(pause);
      } else {
        video.pause();
        playbtn.removeChild(playbtn.firstChild);
        let play = document.createElement('img');
        play.setAttribute('class','pictakki');
        play.src = ('img/play.svg')
        playbtn.appendChild(play);

        let over = document.createElement('img');
        over.setAttribute('class','pictakki');
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
        if (plagg == true) {
            picover.removeChild(picover.firstChild);
            plagg = false;
          }
        let pause = document.createElement('img');
        pause.setAttribute('class','pictakki');
        pause.src = ('img/pause.svg')
        playbtn.appendChild(pause);
    });

    // Mute takki
    let mutebtn = document.createElement('button');
    mutebtn.setAttribute('class','takkar');
    let mute = document.createElement('img');
    mute.setAttribute('class','pictakki');
    mute.src = ('img/mute.svg')
    mutebtn.appendChild(mute);
    sectbutt.appendChild(mutebtn);

    mutebtn.addEventListener('click', function () {
      if (video.muted == false) {
        video.muted = true;
        mutebtn.removeChild(mutebtn.firstChild);
        let unmute = document.createElement('img');
        unmute.setAttribute('class','pictakki');
        unmute.src = ('img/unmute.svg')
        mutebtn.appendChild(unmute);
      } else {
        video.muted = false;
        mutebtn.removeChild(mutebtn.firstChild);
        let mute = document.createElement('img');
        mute.setAttribute('class','pictakki');
        mute.src = ('img/mute.svg')
        mutebtn.appendChild(mute);
      }
    });

    // Fullscreen
    const fullbtn = document.createElement('button');
    fullbtn.setAttribute('class','takkar');
    const fullscr = document.createElement('img');
    fullscr.setAttribute('class','pictakki');
    fullscr.src = ('img/fullscreen.svg')
    fullbtn.appendChild(fullscr);
    sectbutt.appendChild(fullbtn);

    fullbtn.addEventListener('click', function () {
      let elem = document.getElementById("video");
        if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
    });

    // Rewind takki
    const nextbtn = document.createElement('button');
    nextbtn.setAttribute('class','takkar');
    const next = document.createElement('img');
    next.setAttribute('class','pictakki');
    next.src = ('img/next.svg')
    nextbtn.appendChild(next);
    sectbutt.appendChild(nextbtn);

    nextbtn.addEventListener('click', function () {
        video.currentTime += 3;
    });
    const footer1 = document.createElement("section");
    footer1.setAttribute("class", "footer");
    document.querySelector("main").appendChild(footer1);

    let foottext = document.createElement("a");
    var text = document.createTextNode("Til Baka");
    foottext.setAttribute("class", "tilbaka");
    foottext.setAttribute("href", "index.html");
    foottext.appendChild(text);
    footer1.appendChild(foottext);

  }

  }

  allt();
