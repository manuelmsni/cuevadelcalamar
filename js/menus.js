//abrir y cerrar menu de la izquierda

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  var hamburger = url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  if (x.style.left != "0px") {
    x.style.left = "0px";
     $(".navbar-toggler-icon").css("background-image", "url('https://cuevadelcalamar.com/img/cerrar.png')");
  } else {
    x.style.left = "-100%";
    $(".navbar-toggler-icon").css("background-image", hamburger);
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
