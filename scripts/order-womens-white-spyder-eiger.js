var eiger = document.querySelector(".eiger");
var eigerFront = document.querySelector(".eiger-front");
var eigerBack = document.querySelector(".eiger-back");
var eigerBackZoom = document.querySelector(".eiger-back-zoom");
var eigerLogo = document.querySelector(".eiger-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


eiger.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/eiger/eiger.jpg";
})

eigerFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/eiger/eiger-front.jpg";
})

eigerBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/eiger/eiger-back.jpg";
})

eigerBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/eiger/eiger-back-zoom.jpg";
})

eigerLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/eiger/eiger-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















