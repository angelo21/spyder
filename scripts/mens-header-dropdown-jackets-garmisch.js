var garmisch = document.querySelector(".garmisch");
var garmischFront = document.querySelector(".garmisch-front");
var garmischBack = document.querySelector(".garmisch-back");
var garmischBackZoom = document.querySelector(".garmisch-back-zoom");
var garmischLogo = document.querySelector(".garmisch-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

garmisch.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/garmisch/garmisch.jpg";
});
garmischFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/garmisch/garmisch-front.jpg";
});
garmischBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/garmisch/garmisch-back.jpg";
});
garmischBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/garmisch/garmisch-back-zoom.jpg";
});
garmischLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/garmisch/garmisch-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















