var foremost = document.querySelector(".foremost");
var foremostFront = document.querySelector(".foremost-front");
var foremostBack = document.querySelector(".foremost-back");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

foremost.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/foremost/foremost.jpg";
});

foremostFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/foremost/foremost-front.jpg";
});

foremostBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/foremost/foremost-back.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















