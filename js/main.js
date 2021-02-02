
  // Imagen del Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

// Efecto Parallax
(function() {
  window.addEventListener('scroll', function(event) {
    var depth, layer, layers, movement, topDistance, translate3d, _i, _len;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (_i = 0, _len = layers.length; _i < _len; _i++) {
      layer = layers[_i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

// Rotar pez de txipi header
window.onscroll = function () {
  scrollRotate();
  scrollRotate2();
};

function scrollRotate() {
  let image = document.getElementById("rotate");
  image.style.transform = "rotate(" + window.pageYOffset/30 + "deg)";
}

// Rotar calamar header

function scrollRotate2() {
  let image = document.getElementById("rotate2");
  image.style.transform = "rotate(" + window.pageYOffset/-30 + "deg)";
}

//abrir y cerrar menu de la izquierda

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// filtro de productos
  $(window).on('load', function() {
    var productosIsotope = $('.productos-container').isotope({
      itemSelector: '.productos-item',
      layoutMode: 'fitRows'
    });
    $('#productos-flters .menu-div').on('click', function() {
      $("#productos-flters .menu-div").removeClass('filter-active');
      $(this).addClass('filter-active');
      productosIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

