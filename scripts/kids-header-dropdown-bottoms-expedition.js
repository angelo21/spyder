var expedition = document.querySelector(".expedition");
var expeditionBack = document.querySelector(".expedition-back");
var expeditionLogo = document.querySelector(".expedition-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

expedition.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/expedition/expedition.jpg";
});

expeditionBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/expedition/expedition-back.jpg";
});

expeditionLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/expedition/expedition-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















