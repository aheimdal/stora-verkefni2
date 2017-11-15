"use strict";

var videoContainer = document.getElementById("results");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('Get', 'https://notendur.hi.is/~ahh30/vefforritun/hopverkefni2/videos.json');
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData);
  };
  ourRequest.send();
});

function renderHtml(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString = "<h1>" + data[i].title + "</p> <img>" + data[i].poster + "</img>";
  }
  videoContainer.insertAdjacentHTML;
}

//# sourceMappingURL=script-compiled.js.map