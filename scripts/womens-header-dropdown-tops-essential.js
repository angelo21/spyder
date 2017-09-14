var essential = document.querySelector(".essential");
var essentialBackZoom = document.querySelector(".essential-back-zoom");
var essentialLogo = document.querySelector(".essential-logo");



//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

essential.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/essential/essential.jpg";
});

essentialBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/essential/essential-back-zoom.jpg";
});

essentialLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/essential/essential-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















