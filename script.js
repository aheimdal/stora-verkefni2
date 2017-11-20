const API_URL = '/videos.json';
const url = '/videos.json?id=';

document.addEventListener('DOMContentLoaded', function () {
  let site = document.querySelector('.videos');

  program.init(site);
});

/**
 * Sækir gögn með Ajax í json skrá
 */
const program = (function() {
  /**
	 *
	 *
	*/
  function init(site) {

    let request = new XMLHttpRequest();

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
          console.log("data"+data);
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

      /*    showcategories(data.categories[0]);
=======
    /*      showcategories(data.categories[0]);
>>>>>>> 350c470f5439b58ac0bbef424af73fc5e273d8fb
            for (var j = 0; j < data.categories[0].videos.length; j++) {
              showvideos(data.videos[data.categories[0].videos[j]-1]);
            }

          showBorder();
          showcategories(data.categories[1]);
            for (var j = 0; j < data.categories[1].videos.length; j++) {
              showvideos(data.videos[data.categories[1].videos[j]-1]);
            }

          showBorder();
          showcategories(data.categories[2]);
            for (var j = 0; j < data.categories[2].videos.length; j++) {
              showvideos(data.videos[data.categories[2].videos[j]-1]);
          }*/

          for(const {title, videos} of data.categories){
            showcategories({title});
            for(const id of videos){
              const dvideo = data.videos.find(v => v.id === id);
              showvideos(dvideo);
              //do whatever with video
            }
            showBorder();
          }

    };
    request.onerror = function() {
        showHeading();
        const villudiv = document.createElement("div");
        villudiv.setAttribute("class", "villudiv");
        document.querySelector("main").appendChild(villudiv);

        const villa = document.createElement("p");
        const villutext = document.createTextNode("Gat ekki hlaðið gögnum");
        villa.setAttribute("class", "villa");
        villa.appendChild(villutext);
        villudiv.appendChild(villa);
    };
    request.send();

    /*
    * Fall sem býr til aðalfyrirsögn með html
    */
    function showHeading() {
      let section1 = document.createElement("section");
      section1.setAttribute("class", "leigan");
      document.querySelector("main").appendChild(section1);

      const headtext = document.createElement("h1");
      const text = document.createTextNode("Myndbandaleigan");
      headtext.setAttribute("class", "myndbandaleigan");
      headtext.appendChild(text);
      section1.appendChild(headtext);

    }

    /*
    * Fall sem býr til fyrirsagnir flokka með html
    */
    function showcategories(data) {
      let section1 = document.createElement("section");
      section1.setAttribute("class", "categories");
      document.querySelector("main").appendChild(section1);

      let container = document.createElement("div");
      container.setAttribute("class", "categor");
      section1.appendChild(container);

      const cattitill = document.createElement('h2');
      cattitill.setAttribute("class", "categoriestitill");
      const titill = document.createTextNode(data.title);
      cattitill.appendChild(titill);
      container.appendChild(cattitill);
   }

   /*
   * Fall sem býr til línu á milli flokka með html
   */
   function showBorder() {
     const border = document.createElement("div");
     border.setAttribute("class", "border");
     document.querySelector("main").appendChild(border);
   }

    /*
    * Fall sem býr til myndir af videoum með titli, aldri videos og lengd með html
    * Fallið reiknar út úr epoch tíma hve langt er síðan video var sett inn.
    * Fallið reiknar út lengd videos.
    */
    function showvideos(data) {

      const section = document.createElement("section");
      section.setAttribute("class", "videos");
      document.querySelector("main").appendChild(section);

      const container = document.createElement("div");
      container.setAttribute("class", "flokkar");
      section.appendChild(container);

      let img = document.createElement("IMG");
      img.src = data.poster;
      img.setAttribute("class", "image");
      let poster = document.querySelector(".image");
      let id = data.id;
      console.log(id);

      img.addEventListener("click", function(event) {
        video(event, id);
      });
      container.appendChild(img);

      function video(e, id) {
        e.preventDefault();
      //  var poster = document.querySelector(".image");
      //  alert("id"+id);
      //  alert(poster);
    //  var id = id;
      let idnumber = id;
      sessionStorage.setItem('Id', id);
    //  console.log("Session: "+sessionStorage.getItem('Id'));
      window.location.href = '/video.html?id='+idnumber;
    //  localStorage.name = 'Remy';

    //  console.log(localStorage.name);

  //    sessionStorage.gildi = JSON.stringify(gildi);
    }

      // reiknar út lengd videos í mínútum og sekúndum
      // út frá gefnum tíma í sekúndum
      let dur = data.duration;
      let min = Math.floor(dur/60);
      let sec = dur%60;
      let duration = document.createElement('div');
      if (sec < 10) {
        sec = "0"+sec;
      }
      if (min < 10) {
        min = "0"+min;
      }
      const durtext = document.createTextNode(min+":"+sec);
      duration.setAttribute("class", "duration");
      duration.appendChild(durtext);
      container.appendChild(duration);

      const ptitill = document.createElement('p');
      const titill = document.createTextNode(data.title);
      ptitill.setAttribute("class", "titill");
      ptitill.appendChild(titill);
      container.appendChild(ptitill);

      // reiknar út hve langt er liðið síðan videoið var sett inn
      // út frá epoch timestamp
      today=new Date();
      let todaysec = Math.round(today.getTime()/1000);
      let startDate = new Date(data.created); // Your timezone!
      let seconds = Math.round(startDate.getTime()/1000);
      let mismunur = Math.floor(todaysec-seconds);

      let year = 31536000;
      let month = 2592000;
      let week = 604800;
      let day = 60*60*24;
      let hour = 3600;

      // ár
      if (year < mismunur) {
        let arum = Math.floor(mismunur/year);
        let parum = document.createElement('p');
        parum.setAttribute("class", "lidinn");
        if (arum > 1) {
        let parumtext = document.createTextNode("Fyrir " + parum +  " árum síðan");
      } else {
          let parumtext = document.createTextNode("Fyrir " + parum +  " ári síðan");
      }
        parum.appendChild(parumtext);
        container.appendChild(parum);

      // mánuðir
      } else if (month < mismunur) {
        let manudum = Math.floor(mismunur/month);
        let pmanudum = document.createElement('p');
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
        let vikum = Math.floor(mismunur/week);
        let pvikum = document.createElement('p');
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
        let dogum =  Math.floor(mismunur/day);
        let pdogum = document.createElement('p');
        pdogum.setAttribute("class", "lidinn");
        if (dogum > 1) {
        let pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      } else {
        let pdogumtext = document.createTextNode("Fyrir " + dogum +  " dögum síðan");
      }
        pdogum.appendChild(pdogumtext);
        container.appendChild(pdogum);

      // klukkustundir
      } else {
        let klst =  Math.floor(mismunur/hour);
        let pklst = document.createElement('p');
        pklst.setAttribute("class", "lidinn");
        if (klst > 1) {
        let klsttext = document.createTextNode("Fyrir " + klst +  " klukkustundum síðan");
      } else {
        let klsttext = document.createTextNode("Fyrir " + klst +  " klukkustund síðan");
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
