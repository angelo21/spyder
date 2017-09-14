var convert = document.querySelector(".convert");
var convertFront = document.querySelector(".convert-front");
var convertBack = document.querySelector(".convert-back");
var convertBackZoom = document.querySelector(".convert-back-zoom");
var convertLogo = document.querySelector(".convert-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


convert.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-convert/convert.jpg";
});

convertFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-convert/convert-front.jpg";
});

convertBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-convert/convert-back.jpg";
});

convertBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-convert/convert-back-zoom.jpg";
});

convertLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-convert/convert-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















