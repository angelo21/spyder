var ombre = document.querySelector(".ombre");
var ombreBackZoom = document.querySelector(".ombre-back-zoom");
var ombreLogo = document.querySelector(".ombre-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

ombre.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/ombre/ombre.jpg";
});

ombreBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/ombre/ombre-back-zoom.jpg";
});

ombreLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/ombre/ombre-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















