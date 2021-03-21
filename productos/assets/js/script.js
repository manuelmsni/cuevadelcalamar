// Ventana modal en construcción
$(document).ready(function () {

  $('#myModal').modal('toggle');

  //Carrousel
  let slider = tns({
    container: '.my-slider',
    items: 5,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    swipeAngle: false,
    nav: false,
    "loop": false,
    controlsContainer: "#customize-controls",
    responsive: {
      "900": {
        "items": 4
      }
    },
  });

  // magnify("myimage", 3);

});


//abrir y cerrar menu de la izquierda

function showMenu() {
  var x = document.getElementById("menu-izquierda");
  if (x.style.left != "0px") {
    x.style.left = "0px";
  } else {
    x.style.left = "-200%";
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

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

function SrcSet(ImageId, ThisElementSRC) {
  var element = document.getElementById(ImageId);
  element.src = ThisElementSRC;
}

/* Configurador de precios */

function showConfig() {
  personalizar = document.getElementById("diseño-cb");
  if (personalizar.checked) {
    $("#p-colores, #p-vientre, #p-patron, .capa").fadeIn('slow');
  }
  else {
    $("#vientre-cb").checked = false;
    $("#p-colores, #p-vientre, #p-patron, .capa").css("display", "none");
  }
}

function showColorTable() {
  $('.colors').css("display", "none");
  $('#' + $("#colorselector").val()).fadeIn('slow');
}

function showVientre() {
  vientre = document.getElementById("vientre-cb");
  if (vientre.checked) {
    $("#color-v").fadeIn('slow');
  }
  else {
    $("#color-v").css("display", "none");
  }
}


function showPatron() {
  var NoPriceP = parseInt($('#no-price-p').text());
  var PriceP = parseInt($('#price-p').text());
  var IncrementoP = parseInt($('#incremento-p').text());
  var patron = document.getElementById("patron-cb");
  if (patron.checked) {
    var NoPricePChk = NoPriceP + IncrementoP;
    var PriceIncremented = PriceP + IncrementoP;
    $("#patron-pez").fadeIn('slow');
    $("#no-price-p").text(NoPricePChk);
    $("#price-p").text(PriceIncremented);
  }
  else {
    var NoPricePNotChk = NoPriceP - IncrementoP;
    var BasePrice = PriceP - IncrementoP;
    $("#patron-pez").css("display", "none");
    $("#no-price-p, #price-p").text(NoPricePNotChk);
    $("#price-p").text(BasePrice);
  }
}

function ColorSrcSet(ImageId) {
  var imgID = document.getElementById(ImageId);
  var optionValue = $(this).value;
  imgID.src = optionValue;
}
