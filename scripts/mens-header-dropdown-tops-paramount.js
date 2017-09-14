var paramount = document.querySelector(".paramount");
var paramountFront = document.querySelector(".paramount-front");
var paramountBack = document.querySelector(".paramount-back");
var paramountBackZoom = document.querySelector(".paramount-back-zoom");
var paramountLogo = document.querySelector(".paramount-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

paramount.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/paramount/paramount.jpg";
});

paramountFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/paramount/paramount-front.jpg";
});

paramountBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/paramount/paramount-back.jpg";
});

paramountBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/paramount/paramount-back-zoom.jpg";
});

paramountLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/paramount/paramount-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















