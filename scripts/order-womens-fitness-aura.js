var aura = document.querySelector(".aura");
var auraFront = document.querySelector(".aura-front");
var auraBack = document.querySelector(".aura-back");
var auraBackZoom = document.querySelector(".aura-back-zoom");
var auraLogo = document.querySelector(".aura-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


aura.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/aura/aura.jpg";
})

auraFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/aura/aura-front.jpg";
})

auraBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/aura/aura-back.jpg";
})

auraBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/aura/aura-back-zoom.jpg";
})

auraLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/aura/aura-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















