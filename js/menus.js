//abrir y cerrar menu de la izquierda

$(document).ready(function () {
  heightmenu();
  $(window).on('resize', function () {
   heightmenu();
  });
});


function heightmenu() {
    var win = $(window).height(); //this = window
    var nav = $('#menu_arriba').outerHeight();
    var bot = $('#botonera_izquierda').height();
    //var cont = $("#menu-izquierda").height();
    
    var height_cont = win - nav - bot;

    $(".menu-content").css({"maxHeight": height_cont });

  };


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
    $(".navbar-toggler-icon").css("background-image", "url('../img/cerrar.png')");
    $("#menu-izquierda-oscurecer").css("left", "0px");
  } else {
    x.style.left = "-100%";
    $(".navbar-toggler-icon").css("background-image", "url('../img/hamburguesa.png')");
    $("#menu-izquierda-oscurecer").css("left", "-100%");
  }
}

function SrcSet(ImageId, ThisElementSRC) {
  var element = document.getElementById(ImageId);
  element.src = ThisElementSRC;
}
