var contact = document.querySelector(".contact");
var contactFront = document.querySelector(".contact-front");
var contactBack = document.querySelector(".contact-back");
var contactBackZoom = document.querySelector(".contact-back-zoom");
var contactLogo = document.querySelector(".contact-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


contact.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-contact/contact.jpg";
})

contactFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-contact/contact-front.jpg";
})

contactBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-contact/contact-back.jpg";
})

contactBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-contact/contact-back-zoom.jpg";
})

contactLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-contact/contact-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















