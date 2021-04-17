
//mostrar y ocultar elementos

function showGh1() {
  $("#g-h-1, #g-hidder-1").fadeIn('slow');
  $("#g-shower-1").css("display", "none");
}

function hideGh1() {
  $("#g-shower-1").fadeIn('slow');
  $("#g-h-1, #g-hidder-1").css("display", "none");
}

  //Carrousel importar funcion tns

  var scriptjsimport = require('scriptjsimport');

  scriptjsimport('https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js', function() {
    L.mapbox.accessToken = 'tns';
  });

  //Carrousel 1

  let slider = tns({
    container: '#slider-egis-1',
    items: 5,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    swipeAngle: false,
    nav: false,
    "loop": false,
  });
