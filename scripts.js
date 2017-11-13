//var API_URL = 'http://apis.is/car?number=';
var API_URL = '/videos.json?is=';

document.addEventListener('DOMContentLoaded', function() {

  program.init();
  // TODO keyra upp forrit
});


/**
 * Bílaleit. Sækir gögn með Ajax á apis.is.
 */
var program = (function() {
  var container;
  var input;
  var action;

  function submit(e) {
    e.preventDefault();
    empty(container);
    var innput = input.value;
    if (innput == "") {
      container.appendChild(document.createTextNode('Sláðu inn bílnúmer'));
      return
    } else {
      fetchdata();
    }
  }

  function empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  function fetchdata() {
    empty(container);
    //debugger;

    var request = new XMLHttpRequest();
    // sækjum slóð með GET
    request.open('GET', API_URL + input.value, true);
    // Fall sem keyrir við svar frá vefþjón
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);
        show(data.results[0]);
      } else if (request.status >= 400) {
        empty(container);
        container.appendChild(document.createTextNode('Villa kom upp'));
      }
    };

    request.onerror = function() {
      empty(container);
      container.appendChild(document.createTextNode('Óþekkt villa'));
    };
    request.send();
  }

  function show(data) {
    empty(container);
    var dl = document.createElement('dl');
    //Litur
    var colordt = document.createElement('dt');
    var colordd = document.createElement('dd');
    var color_head = document.createTextNode('title');
    var color_result = document.createTextNode(data.color);
    colordt.appendChild(color_head);
    colordd.appendChild(color_result);
    dl.appendChild(colordt);
    dl.appendChild(colordd);
    //Gerð
    var typedt = document.createElement('dt');
    var typedd = document.createElement('dd');
    var type_head = document.createTextNode('duration');
    var type_result = document.createTextNode(data.type);
    typedt.appendChild(type_head);
    typedd.appendChild(type_result);
    dl.appendChild(typedt);
    dl.appendChild(typedd);
    //Næsta Skoðun
    var nCheckdt = document.createElement('dt');
    var nCheckdd = document.createElement('dd');
    var nCheck_head = document.createTextNode('Næsta skoðun');
    var nCheck_result = document.createTextNode(data.nextCheck);
    nCheckdt.appendChild(nCheck_head);
    nCheckdd.appendChild(nCheck_result);
    dl.appendChild(nCheckdt);
    dl.appendChild(nCheckdd);
    //Staða
    var statusdt = document.createElement('dt');
    var statusdd = document.createElement('dd');
    var status_head = document.createTextNode('Staða');
    var status_result = document.createTextNode(data.status);
    statusdt.appendChild(status_head);
    statusdd.appendChild(status_result);
    dl.appendChild(statusdt);
    dl.appendChild(statusdd);

    container.appendChild(dl);
  }

  function init() {
    input = document.querySelector('input');
    container = document.querySelector('.results');
    action = document.querySelector('form');
    //button = document.querySelector('button');

    action.addEventListener('submit', submit);
  }

  return {
    init: init
  }
})();
