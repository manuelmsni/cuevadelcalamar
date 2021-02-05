$(document).ready(function () {
  // Imagen del Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
  
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

	// Rotación en Parallax
	$(window).on('scroll', function() {
		
		// Rotar pez de txipi con la caña en el header
		scrollRotate2();
		
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
});

function scrollRotate2() {
  var speed = -30;
  if(screen.width < 900) {
      speed = -60;
  } else {
      speed = -30;
  }
  let image = document.getElementById("rotate2");
  image.style.transform = "rotate(" + window.pageYOffset/speed + "deg)";
}

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
    x.style.left = "-500px";
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

  // Ventana modal en construcción
  $( document ).ready(function() {
    $('#myModal').modal('toggle');
});




