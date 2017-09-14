var power = document.querySelector(".power");
var powerBack = document.querySelector(".power-back");
var powerlogo = document.querySelector(".power-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 power.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/power/power.jpg";
})
 powerBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/power/power-back.jpg";
})
 powerlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/power/power-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















