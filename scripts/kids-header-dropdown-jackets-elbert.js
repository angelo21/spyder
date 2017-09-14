var elbert = document.querySelector(".elbert");
var elbertBackZoom = document.querySelector(".elbert-back-zoom");




//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

elbert.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/elbert/elbert.jpg";
});

elbertBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/elbert/elbert-back-zoom.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















