
//mostrar y ocultar elementos

function showGh1() {
  $("#g-h-1, #g-hidder-1").fadeIn('slow');
  $("#g-shower-1").css("display", "none");
}

function hideGh1() {
  $("#g-shower-1").fadeIn('slow');
  $("#g-h-1, #g-hidder-1").css("display", "none");
}

function ShowHide(MostrarClase, OcultarClase) {
  var Mostrar = document.getElementByClass(MostrarClase);
  var Ocultar = document.getElementByClass(OcultarClase);
  Mostrar.fadeIn('slow');
  Ocultar.css("display", "none");
}
