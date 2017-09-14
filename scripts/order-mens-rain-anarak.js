var anarakFrontZoom = document.querySelector(".anarak-front-zoom");
var anarakFront = document.querySelector(".anarak-front");
var anarakBack = document.querySelector(".anarak-back");
var anarakBackZoomClicked = document.querySelector(".anarak-back-zoom-clicked");
var anarakLogoClicked = document.querySelector(".anarak-logo-clicked");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


anarakFrontZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-anarak/anarak.jpg";
})

anarakFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-anarak/anarak-front-clicked.jpg";
})

anarakBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-anarak/anarak-back-clicked.jpg";
})

anarakBackZoomClicked.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-anarak/anarak-back-zoom-clicked.jpg";
})

anarakLogoClicked.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-anarak/anarak-logo-clicked.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















