var hera = document.querySelector(".hera");
var heraFront = document.querySelector(".hera-front");
var heraBack = document.querySelector(".hera-back");
var heraBackZoom = document.querySelector(".hera-back-zoom");
var heralogo = document.querySelector(".hera-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 hera.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/hera/hera.jpg";
})
 heraFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/hera/hera-front.jpg";
})
 heraBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/hera/hera-back.jpg";
})
 heraBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/hera/hera-back-zoom.jpg";
})
 heralogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/hera/hera-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















