var spryte = document.querySelector(".spryte");
var spryteBack = document.querySelector(".spryte-back");
var sprytelogo = document.querySelector(".spryte-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 spryte.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/spryte/spryte.jpg";
})
 spryteBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/spryte/spryte-back.jpg";
})
 sprytelogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/spryte/spryte-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















