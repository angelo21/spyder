var divine = document.querySelector(".divine");
var divineBackZoom = document.querySelector(".divine-back-zoom");
var divineLogo = document.querySelector(".divine-logo");



//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

divine.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/divine/divine.jpg";
});

divineBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/divine/divine-back-zoom.jpg";
});

divineLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/divine/divine-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















