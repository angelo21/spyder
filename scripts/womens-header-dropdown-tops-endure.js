var endure = document.querySelector(".endure");
var endureFront = document.querySelector(".endure-front");
var endureBack = document.querySelector(".endure-back");




//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

endure.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/endure/endure.jpg";
});

endureFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/endure/endure-front.jpg";
});

endureBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/endure/endure-back.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















