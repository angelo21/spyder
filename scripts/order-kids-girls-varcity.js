var varcity = document.querySelector(".varcity");
var varcityBack = document.querySelector(".varcity-back");
var varcitylogo = document.querySelector(".varcity-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 varcity.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/varcity/varcity.jpg";
})
 varcityBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/varcity/varcity-back.jpg";
})
 varcitylogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/varcity/varcity-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















