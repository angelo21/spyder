var waffle = document.querySelector(".waffle");
var waffleFront = document.querySelector(".waffle-front");
var waffleBack = document.querySelector(".waffle-back");
var waffleBackZoom = document.querySelector(".waffle-back-zoom");
var waffleLogo = document.querySelector(".waffle-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


waffle.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/waffle/waffle.jpg";
});

waffleFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/waffle/waffle-front.jpg";
});

waffleBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/waffle/waffle-back.jpg";
});

waffleBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/waffle/waffle-back-zoom.jpg";
});

waffleLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/waffle/waffle-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















