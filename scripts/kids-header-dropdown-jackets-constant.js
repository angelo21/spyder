var constant = document.querySelector(".constant");
var constantBackZoom = document.querySelector(".constant-back-zoom");
var constantLogo = document.querySelector(".constant-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

constant.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/constant/constant.jpg";
});

constantBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/constant/constant-back-zoom.jpg";
});

constantLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/constant/constant-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















