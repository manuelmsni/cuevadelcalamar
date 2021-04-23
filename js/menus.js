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
function showOscurecerMenu() {
  var x = document.getElementById("menu-izquierda-oscurecer");
  if (x.style.left != "0px") {
    x.style.left = "0px";
  } else {
    x.style.left = "-100%";
  }
}
