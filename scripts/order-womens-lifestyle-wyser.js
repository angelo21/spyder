var wyser = document.querySelector(".wyser");
var wyserFront = document.querySelector(".wyser-front");
var wyserBackZoom = document.querySelector(".wyser-back-zoom");
var wyserLogo = document.querySelector(".wyser-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


wyser.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/wyser/wyser.jpg";
})

wyserFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/wyser/wyser-front.jpg";
})

wyserBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/wyser/wyser-back-zoom.jpg";
})

wyserLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/wyser/wyser-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















