var down = document.querySelector(".down");
var downBackZoom = document.querySelector(".down-back-zoom");
var downLogo = document.querySelector(".down-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

down.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/down/down.jpg";
});

downBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/down/down-back-zoom.jpg";
});

downLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/down/down-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})
















