var gogo = document.querySelector(".gogo");
var gogoFront = document.querySelector(".gogo-front");
var gogoBack = document.querySelector(".gogo-back");
var gogoBackZoom = document.querySelector(".gogo-back-zoom");
var gogoLogo = document.querySelector(".gogo-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


gogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/gogo/gogo.jpg";
})

gogoFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/gogo/gogo-front.jpg";
})

gogoBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/gogo/gogo-back.jpg";
})

gogoBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/gogo/gogo-back-zoom.jpg";
})

gogoLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/gogo/gogo-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















