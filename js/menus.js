//abrir y cerrar menu de la izquierda

$(document).ready(function () {
  $(window).on('resize', function () {
    var win = $(window).height(); //this = window
    var nav = $('#menu_arriba').height();
    var bot = $('#botonera_izquierda').height();
    //var cont = $("#menu-izquierda").height();
    
    var height_cont = win - nav - bot;

    $(".menu-content").height(height_cont);

  });

});

/*
$(document).ready(function () {
  $(window).on('resize', function () {
    var win = $(window).height(); //this = window
    var nav = $('#menu_arriba').height();
    //var cont = $("#menu-izquierda").height();
    
    var height_cont = win - nav;

    $("#menu-izquierda").height(height_cont);

  });

});
*/

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  if (x.style.left != "0px") {
    x.style.left = "0px";
    $(".navbar-toggler-icon").css("background-image", "url('https://cuevadelcalamar.com/img/cerrar.png')");
    $("#menu-izquierda-oscurecer").css("left", "0px");
  } else {
    x.style.left = "-100%";
    $(".navbar-toggler-icon").css("background-image", "url('https://cuevadelcalamar.com/img/hamburguesa.png')");
    $("#menu-izquierda-oscurecer").css("left", "-100%");
  }
}

function SrcSet(ImageId, ThisElementSRC) {
  var element = document.getElementById(ImageId);
  element.src = ThisElementSRC;
}
