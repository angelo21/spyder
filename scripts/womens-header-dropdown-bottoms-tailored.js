var tailored = document.querySelector(".tailored");
var tailoredFront = document.querySelector(".tailored-front");
var tailoredBack = document.querySelector(".tailored-back");
var tailoredBackZoom = document.querySelector(".tailored-back-zoom");
var tailoredlogo = document.querySelector(".tailored-logo");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

tailored.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/tailored/tailored.jpg";
});

tailoredFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/tailored/tailored-front.jpg";
});

tailoredBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/tailored/tailored-back.jpg";
});

tailoredBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/tailored/tailored-back-zoom.jpg";
});

tailoredlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/tailored/tailored-logo.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















