var rayne = document.querySelector(".rayne");
var rayneFront = document.querySelector(".rayne-front");
var rayneBack = document.querySelector(".rayne-back");
var rayneBackZoom = document.querySelector(".rayne-back-zoom");
var rayneLogo = document.querySelector(".rayne-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


rayne.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rayne/rayne.jpg";
})

rayneFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rayne/rayne-front.jpg";
})

rayneBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rayne/rayne-back.jpg";
})

rayneBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rayne/rayne-back-zoom.jpg";
})

rayneLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/rayne/rayne-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















