var speed = document.querySelector(".speed");
var speedBack = document.querySelector(".speed-back");
var speedLogo = document.querySelector(".speed-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

speed.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/speed/speed.jpg";
});

speedBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/speed/speed-back.jpg";
});

speedLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/speed/speed-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















