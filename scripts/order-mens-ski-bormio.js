var bormio = document.querySelector(".bormio");
var bormioFront = document.querySelector(".bormio-front");
var bormioBack = document.querySelector(".bormio-back");
var bormioBackZoom = document.querySelector(".bormio-back-zoom");
var bormioLogo = document.querySelector(".bormio-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


bormio.addEventListener("click", function() {
imageChange.src = "../../images/order-description/mens/mens-ski/bormio/bormio.jpg";
});

bormioFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/bormio/bormio-front.jpg";
});

bormioBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/bormio/bormio-back.jpg";
});

bormioBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/bormio/bormio-back-zoom.jpg";
});

bormioLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/bormio/bormio-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















