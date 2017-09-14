var vyper = document.querySelector(".vyper");
var vyperFront = document.querySelector(".vyper-front");
var vyperBack = document.querySelector(".vyper-back");
var vyperBackZoom = document.querySelector(".vyper-back-zoom");
var vyperLogo = document.querySelector(".vyper-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

vyper.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/vyper/vyper.jpg";
});
vyperFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/vyper/vyper-front.jpg";
});
vyperBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/vyper/vyper-back.jpg";
});
vyperBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/vyper/vyper-back-zoom.jpg";
});
vyperLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/vyper/vyper-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















