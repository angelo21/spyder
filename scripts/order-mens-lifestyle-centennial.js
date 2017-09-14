var centennial = document.querySelector(".centennial");
var centennialFront = document.querySelector(".centennial-front");
var centennialBack = document.querySelector(".centennial-back");
var centennialBackZoom = document.querySelector(".centennial-back-zoom");
var centennialLogo = document.querySelector(".centennial-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


centennial.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-centennial/centennial.jpg";
});

centennialFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-centennial/centennial-front.jpg";
});

centennialBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-centennial/centennial-back.jpg";
});

centennialBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-centennial/centennial-back-zoom.jpg";
});

centennialLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-centennial/centennial-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















