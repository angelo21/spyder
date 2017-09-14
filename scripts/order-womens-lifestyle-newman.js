var newman = document.querySelector(".newman");
var newmanFront = document.querySelector(".newman-front");
var newmanBack = document.querySelector(".newman-back");
var newmanBackZoom = document.querySelector(".newman-back-zoom");
var newmanLogo = document.querySelector(".newman-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


newman.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/newman/newman.jpg";
})

newmanFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/newman/newman-front.jpg";
})

newmanBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/newman/newman-back.jpg";
})

newmanBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/newman/newman-back-zoom.jpg";
})

newmanLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/newman/newman-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















