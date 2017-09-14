var convey = document.querySelector(".convey");
var conveyFront = document.querySelector(".convey-front");
var conveyBack = document.querySelector(".convey-back");
var conveyBackZoom = document.querySelector(".convey-back-zoom");
var conveyLogo = document.querySelector(".convey-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


convey.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/convey/convey.jpg";
})

conveyFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/convey/convey-front.jpg";
})

conveyBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/convey/convey-back.jpg";
})

conveyBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/convey/convey-back-zoom.jpg";
})

conveyLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/convey/convey-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















