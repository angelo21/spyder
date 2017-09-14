var trainingShort = document.querySelector(".training-short");
var trainingShortBack = document.querySelector(".training-short-back");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

trainingShort.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/bottoms/training-short/training-short.jpg";
});

trainingShortBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/bottoms/training-short/training-short-back.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















