var panic = document.querySelector(".panic");
var panicFront = document.querySelector(".panic-front");
var panicBack = document.querySelector(".panic-back");
var panicBackZoom = document.querySelector(".panic-back-zoom");
var panicLogo = document.querySelector(".panic-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

panic.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/panic/panic.jpg";
});
panicFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/panic/panic-front.jpg";
});
panicBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/panic/panic-back.jpg";
});
panicBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/panic/panic-back-zoom.jpg";
});
panicLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/panic/panic-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















