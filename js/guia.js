// Abrir mensaje modal al cargar la página

$(document).ready(function () {
  // Ventana modal en construcción
  $('#myModal').modal('toggle');
});

//mostrar y ocultar elementos

function showGh1() {
  $("#g-h-1, #g-hidder-1").fadeIn('slow');
  $("#g-shower-1").css("display", "none");
}

function hideGh1() {
  $("#g-shower-1").fadeIn('slow');
  $("#g-h-1, #g-hidder-1").css("display", "none");
}

//Carrousel 1

  let slider = tns({
    "container": "#slider-egis-1",
    "items": 3,
    "slideBy": 'page',
    "autoplay": false,
    "mouseDrag": true,
    "swipeAngle": false,
    "nav": false,
    "loop": false,
  });
