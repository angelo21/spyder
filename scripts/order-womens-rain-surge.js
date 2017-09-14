var surge = document.querySelector(".surge");
var surgeFront = document.querySelector(".surge-front");
var surgeBack = document.querySelector(".surge-back");
var surgeBackZoom = document.querySelector(".surge-back-zoom");
var surgeLogo = document.querySelector(".surge-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


surge.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/surge/surge.jpg";
})

surgeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/surge/surge-back.jpg";
})

surgeLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/surge/surge-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















