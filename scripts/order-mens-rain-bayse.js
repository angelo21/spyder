var bayse = document.querySelector(".bayse");
var bayseBack = document.querySelector(".bayse-back");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


bayse.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-bayse/bayse.jpg";
})

bayseBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-rain/mens-rain-bayse/bayse-back.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















