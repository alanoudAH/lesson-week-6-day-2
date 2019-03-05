// click event for gray button

// click event for white button
/*
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
document.getElementsByTagName('body')[0].style.color = 'black';
}*/




function switchGray(){

$("body").css("background-color","gray");
$("body").css("color","white");
$("h1").css("color","pink");
}

function switchWhite() {

  $("body").css("background-color","white");
  $("body").css("color","black");
  
}
$("#grayButton").on('click', switchGray);
$("#whiteButton").on('click', switchWhite);
