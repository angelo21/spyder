var crush = document.querySelector(".crush");
var crushBack = document.querySelector(".crush-back");
var crushlogo = document.querySelector(".crush-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 crush.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/crush/crush.jpg";
})
 crushBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/crush/crush-back.jpg";
})
 crushlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/crush/crush-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















