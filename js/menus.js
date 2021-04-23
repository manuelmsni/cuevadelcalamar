//abrir y cerrar menu de la izquierda

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  if (x.style.left != "0px") {
    x.style.left = "0px";
     $(".navbar-toggler-icon").css("background-image", "url('https://cuevadelcalamar.com/img/cerrar.png')");
  } else {
    x.style.left = "-100%";
    $(".navbar-toggler-icon").css("background-image", "url('https://cuevadelcalamar.com/img/hamburguesa.png')");
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
