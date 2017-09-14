var berner = document.querySelector(".berner");
var bernerFront = document.querySelector(".berner-front");
var bernerBack = document.querySelector(".berner-back");
var bernerBackZoom = document.querySelector(".berner-back-zoom");
var bernerLogo = document.querySelector(".berner-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


berner.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/berner/berner.jpg";
})

bernerFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/berner/berner-front.jpg";
})

bernerBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/berner/berner-back.jpg";
})

bernerBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/berner/berner-back-zoom.jpg";
})

bernerLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/berner/berner-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















