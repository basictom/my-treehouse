console.log("erg");

var output = document.getElementById("output");
var points = document.getElementById("points");


function badges(getData){
  var newBadge = "";
  var currentBadge = "";
  for(var i=0;i<getData.badges.length; i++){
    currentBadge = getData.badges[i];
    newBadge += `<div class="col-sm-6 col-md-4 card">`;
    newBadge += `<div class="thumbnail">`;
    newBadge += `<img src="${currentBadge.icon_url}" alt="${currentBadge.name}">`;
    newBadge += `<div class="caption">`;
    newBadge += `<h5>${currentBadge.name}</h5>`;
    newBadge += `<p><strong>Date Acheived:</strong> ${currentBadge.earned_date}</p>`;
    newBadge += `<p><strong>ID:</strong> ${currentBadge.id}</p>`;
    newBadge += `<p><strong>Name:</strong> ${currentBadge.name}</p>`;
    newBadge += `<p><strong>URL:</strong> <a href="${currentBadge.url}">Click here to view</a></p>`;
    newBadge += `</div></div></div>`;
  }
  output.innerHTML = newBadge;
}

function totalPoints(getPoint){
  var newPoint = getPoint.points.total;
  // console.log(newPoint);
  points.innerHTML = `Current Score: ` + newPoint;
}



function fileLoaded(){
  var data = JSON.parse(this.responseText)
  console.log(data);
  badges(data);
  totalPoints(data);
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", fileLoaded);
// myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/thomasfitzgerald.json");
myRequest.send();
console.log("team tree house");
