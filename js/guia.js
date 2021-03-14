$(document).ready(function () {
  // Ventana modal en construcción
  $('#myModal').modal('toggle');
});


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


// $(document).ready(function () {
//   $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//       0: {
//         items: 1,
//         nav: true
//       },
//       600: {
//         items: 3,
//         nav: false
//       },
//       1000: {
//         items: 5,
//         nav: true,
//         loop: false
//       }
//     }
//   })
// });


