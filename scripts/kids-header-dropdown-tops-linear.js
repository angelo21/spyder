var linear = document.querySelector(".linear");
var linearBack = document.querySelector(".linear-back");
var linearLogo = document.querySelector(".linear-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

linear.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/linear/linear.jpg";
});

linearBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/linear/linear-back.jpg";
});

linearLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/linear/linear-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















