var timeless = document.querySelector(".timeless");
var timelessBackZoom = document.querySelector(".timeless-back-zoom");
var timelessLogo = document.querySelector(".timeless-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

timeless.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/timeless/timeless.jpg";
});

timelessBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/timeless/timeless-back-zoom.jpg";
});

timelessLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/timeless/timeless-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















