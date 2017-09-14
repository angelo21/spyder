var lively = document.querySelector(".lively");
var livelyBack = document.querySelector(".lively-back");
var livelylogo = document.querySelector(".lively-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 lively.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/lively/lively.jpg";
})
 livelyBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/lively/lively-back.jpg";
})
 livelylogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-girls/lively/lively-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















