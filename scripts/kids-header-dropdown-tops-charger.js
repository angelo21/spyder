var charger = document.querySelector(".charger");
var chargerBack = document.querySelector(".charger-back");
var chargerLogo = document.querySelector(".charger-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

charger.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/charger/charger.jpg";
});

chargerBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/charger/charger-back.jpg";
});

chargerLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/charger/charger-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















