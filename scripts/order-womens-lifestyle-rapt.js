var rapt = document.querySelector(".rapt");
var raptFront = document.querySelector(".rapt-front");
var raptBack = document.querySelector(".rapt-back");
var raptBackZoom = document.querySelector(".rapt-back-zoom");
var raptLogo = document.querySelector(".rapt-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


rapt.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/rapt/rapt.jpg";
})

raptFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/rapt/rapt-front.jpg";
})

raptBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/rapt/rapt-back.jpg";
})

raptBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/rapt/rapt-back-zoom.jpg";
})

raptLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/rapt/rapt-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















