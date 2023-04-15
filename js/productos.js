$(document).ready(function () {

  //Carrousel debajo de imagen de producto
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

}); //final de document ready


/* Lupa productos 

magnify("myimage", 3);

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  // Create magnifier glass:
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  // Insert magnifier glass:
  img.parentElement.insertBefore(glass, img);

  // Set background properties for the magnifier glass:
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  // Execute a function when someone moves the magnifier glass over the image:
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  //and also for touch screens:
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    // Prevent any other actions that may occur when moving over the image
    e.preventDefault();
    // Get the cursor's x and y positions:
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    // Prevent the magnifier glass from being positioned outside the image:
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    // Set the position of the magnifier glass:
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    // Display what the magnifier glass "sees":
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    // Get the x and y positions of the image:
    a = img.getBoundingClientRect();
    // Calculate the cursor's x and y coordinates, relative to the image:
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    // Consider any page scrolling:
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

*/

/* Configurador de precios */

function showConfig() {
  personalizar = document.getElementById("diseño-cb");
  var patron = document.getElementById("patron-cb");
  if (personalizar.checked) {
    $(".capa-top").css("display", "block");
    $("#p-colores, #p-vientre, #p-patron, .capa, #generated").fadeIn('slow');
    $("#freegenerated").css("display", "none");
    $("#codebox").fadeIn('slow');

    if (patron.checked) {
      showPatron();
    }

  }
  else {
    $("#vientre-cb").checked = false;
    $("#p-colores, #p-vientre, #p-patron, .capa, #generated").css("display", "none");
    $("#freegenerated").fadeIn('slow');
    $("#codebox").css("display", "none");

    if (patron.checked) {
      patron.checked = false;
      showPatron();
      patron.checked = true;
    }

  }
}

function showColorTable() {
  $(".colors").removeClass("active");
  $('#product-c-3, #product-c-4, #product-c-5').attr("src", "../img/default.png");
  $('.colors').css("display", "none");
  $('#' + $("#colorselector").val()).fadeIn('slow');
  $('#' + $("#colorselector").val()).addClass("active");
  colorSRC1 = $(".colors.active .colorSRC1").val();
  colorSRC2 = $(".colors.active .colorSRC2").val();
  colorSRC3 = $(".colors.active .colorSRC3").val();
  $('#product-c-3').attr("src", colorSRC1);
  $('#product-c-4').attr("src", colorSRC2);
  $('#product-c-5').attr("src", colorSRC3);
}

function showVientre() {
  vientre = document.getElementById("vientre-cb");
  vientreSRC = $("#vientreSRC").val();
  if (vientre.checked) {
    $("#color-v").fadeIn('slow');
    $('#product-c-6').attr("src", vientreSRC);
  }
  else {
    $("#color-v").css("display", "none");
    $('#product-c-6').attr("src", "../img/default.png");
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

function ColorSrcSet(ImageId, selectVal) {
  document.getElementById(ImageId).src = selectVal;
}

function code() {
  vientre = document.getElementById("vientre-cb");
  if (vientre.checked) {
    vientr = $("#vientreSRC").find('option:selected').attr('name');
  }
  else {
    vientr = "XX";
  }
  codigo = "#" + $("#tituloproducto").attr('name') + "·" + $(".colors.active .colorSRC1").find('option:selected').attr('name') + $(".colors.active .colorSRC2").find('option:selected').attr('name') + $(".colors.active .colorSRC3").find('option:selected').attr('name') + "·" + vientr;
  $("#productID").text(codigo);
}

function copiarAlPortapapeles(id_elemento) {
  var $temp = $("<input>")
  $("body").append($temp);
  $temp.val($(id_elemento).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#copiedID").css("display", "inline");
  $("#copiedID").delay(2000).fadeOut('slow');
}
