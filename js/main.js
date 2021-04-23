

$(document).ready(function () {
  // Imagen del Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  //Cambiar title al cambiar de pestaña
  // titleComeBack();

  /*
    function titleComeBack() {
      jQuery(function () {
        var message = "¡Te echamos de menos!";
        var original;
  
        jQuery(window).focus(function () {
          if (original) {
            document.title = original;
          }
        }).blur(function () {
          var title = jQuery('title').text();
          if (title != message) {
            original = title;
          }
          document.title = message;
        });
      });
    }
    */

  // filtro de productos
  $(window).on('load', function () {
    var productosIsotope = $('.productos-container').isotope({
      itemSelector: '.productos-item',
      layoutMode: 'fitRows'
    });
    $('#productos-flters .menu-div').on('click', function () {
      $("#productos-flters .menu-div").removeClass('filter-active');
      $(this).addClass('filter-active');
      productosIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Rotación en Parallax
  $(window).on('scroll', function () {

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

  // Ventana modal en construcción
  $('#myModal').modal('toggle');

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

});

function scrollRotate2() {
  var speed = -30;
  if (screen.width < 900) {
    speed = -60;
  } else {
    speed = -30;
  }
  let image = document.getElementById("rotate2");
  image.style.transform = "rotate(" + window.pageYOffset / speed + "deg)";
}

function SrcSet(ImageId, ThisElementSRC) {
  var element = document.getElementById(ImageId);
  element.src = ThisElementSRC;
}

