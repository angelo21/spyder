var flyte = document.querySelector(".flyte");
var flyteBackZoom = document.querySelector(".flyte-back-zoom");
var flyteLogo = document.querySelector(".flyte-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

flyte.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/flyte/flyte.jpg";
});

flyteBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/flyte/flyte-back-zoom.jpg";
});

flyteLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/jackets/flyte/flyte-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















