var rush = document.querySelector(".rush");
var rushFront = document.querySelector(".rush-front");
var rushBack = document.querySelector(".rush-back");
var rushBackZoom = document.querySelector(".rush-back-zoom");
var rushLogo = document.querySelector(".rush-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


rush.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rush/rush.jpg";
})

rushFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rush/rush-front.jpg";
})

rushBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rush/rush-back.jpg";
})

rushBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rush/rush-back-zoom.jpg";
})

rushLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rush/rush-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















