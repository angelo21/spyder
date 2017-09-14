var glissade = document.querySelector(".glissade");
var glissadeFront = document.querySelector(".glissade-front");
var glissadeBack = document.querySelector(".glissade-back");
var glissadeBackZoom = document.querySelector(".glissade-back-zoom");
var glissadelogo = document.querySelector(".glissade-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


glissade.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/glissade/glissade.jpg";
})

glissadeFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/glissade/glissade-front.jpg";
})

glissadeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/glissade/glissade-back.jpg";
})

glissadeBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/glissade/glissade-back-zoom.jpg";
})

glissadelogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/glissade/glissade-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















