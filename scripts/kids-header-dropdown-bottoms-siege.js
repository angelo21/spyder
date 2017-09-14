var siege = document.querySelector(".siege");
var siegeBack = document.querySelector(".siege-back");
var siegeLogo = document.querySelector(".siege-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

siege.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/siege/siege.jpg";
});

siegeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/siege/siege-back.jpg";
});

siegeLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/siege/siege-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















