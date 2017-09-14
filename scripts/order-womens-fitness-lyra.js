var lyra = document.querySelector(".lyra");
var lyraFront = document.querySelector(".lyra-front");
var lyraBack = document.querySelector(".lyra-back");
var lyraBackZoom = document.querySelector(".lyra-back-zoom");
var lyralogo = document.querySelector(".lyra-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


lyra.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/lyra/lyra.jpg";
})

lyraFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/lyra/lyra-front.jpg";
})

lyraBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/lyra/lyra-back.jpg";
})

lyraBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/lyra/lyra-back-zoom.jpg";
})

lyralogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/lyra/lyra-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















