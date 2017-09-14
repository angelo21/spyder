var mimi = document.querySelector(".mimi");
var mimiBack = document.querySelector(".mimi-back");
var mimiLogo = document.querySelector(".mimi-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

mimi.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/mimi/mimi.jpg";
});

mimiBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/mimi/mimi-back.jpg";
});

mimiLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/mimi/mimi-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















