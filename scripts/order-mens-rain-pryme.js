var prymeFrontZoom = document.querySelector(".pryme-front-zoom");
var prymeFront = document.querySelector(".pryme-front");
var prymeBack = document.querySelector(".pryme-back");
var prymeBackZoomClicked = document.querySelector(".pryme-back-zoom-clicked");
var prymeLogoClicked = document.querySelector(".pryme-logo-clicked");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


prymeFrontZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-pryme/pryme-front-zoom.jpg";
})

prymeFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-pryme/pryme-front-clicked.jpg";
})

prymeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-pryme/pryme-back-clicked.jpg";
})

prymeBackZoomClicked.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-pryme/pryme-back-zoom-clicked.jpg";
})

prymeLogoClicked.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-pryme/pryme-logo-clicked.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















