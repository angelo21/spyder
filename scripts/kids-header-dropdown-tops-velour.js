var velour = document.querySelector(".velour");
var velourBack = document.querySelector(".velour-back");
var velourLogo = document.querySelector(".velour-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

velour.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/velour/velour.jpg";
});

velourBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/velour/velour-back.jpg";
});

velourLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/velour/velour-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















