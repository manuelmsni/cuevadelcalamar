  // Ventana modal en construcción
  $( document ).ready(function() {
    $('#myModal').modal('toggle');
});

  //Cambiar title al cambiar de pestaña
  jQuery(document).ready(function () {
      titleCameBack();
  });
  function titleCameBack() {
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

//mostrar y ocultar elementos

function showGh1() {
 $("#g-h-1, #g-hidder-1").fadeIn('slow');
 $("#g-shower-1").css("display", "none");
 }

function hideGh1() {
  $("#g-shower-1").fadeIn('slow');
  $("#g-h-1, #g-hidder-1").css("display", "none");
  }

let slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  responsive: {
    640: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400: {
      items: 4
    }
  }
});
