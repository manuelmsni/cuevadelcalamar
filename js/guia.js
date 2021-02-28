//abrir y cerrar menu de la izquierda

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  if (x.style.left != "0px") {
    x.style.left = "0px";
  } else {
    x.style.left = "-1000px";
  }
}
function showCloseMenu() {
  var x = document.getElementById("cerrar-menu-izquierda");
  if (x.style.left != "366px") {
    x.style.left = "366px";
  } else {
    x.style.left = "-1000px";
  }
}
function showOscurecerMenu() {
  var x = document.getElementById("menu-izquierda-oscurecer");
  if (x.style.left != "0px") {
    x.style.left = "0px";
  } else {
    x.style.left = "-100%";
  }
}

$('g-s-1').click(showGh1); 

function showGh1() {
 $(".g-s-1, .g-hidder-1").fadeIn('slow');
 $(".g-shower-1").css("display", "none");
 }

$('g-d-1').click(hideGh1); 

function hideGh1() {
  $(".g-shower-1").fadeIn('slow');
  $(".g-s-1, .g-hidder-1").css("display", "none");
  }
