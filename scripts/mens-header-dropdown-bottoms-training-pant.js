var training = document.querySelector(".training-pant");
var trainingBack = document.querySelector(".training-pant-back");
var trainingLogo = document.querySelector(".training-pant-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

training.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/bottoms/training-pant/training-pant.jpg";
});

trainingBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/bottoms/training-pant/training-pant-back.jpg";
});

trainingLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/bottoms/training-pant/training-pant-logo.jpg";
});




//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















