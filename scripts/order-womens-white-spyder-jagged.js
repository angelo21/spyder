var jagged = document.querySelector(".jagged");
var jaggedFront = document.querySelector(".jagged-front");
var jaggedBack = document.querySelector(".jagged-back");
var jaggedBackZoom = document.querySelector(".jagged-back-zoom");
var jaggedLogo = document.querySelector(".jagged-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


jagged.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/jagged/jagged.jpg";
})

jaggedFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/jagged/jagged-front.jpg";
})

jaggedBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/jagged/jagged-back.jpg";
})

jaggedBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/jagged/jagged-back-zoom.jpg";
})

jaggedLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/jagged/jagged-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















