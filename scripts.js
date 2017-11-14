var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', 'stora-verkefni2/videos.json')
ourRequest.onload = function(){
  console.log(ourRequest.responseText)
};
ourRequest.send();
