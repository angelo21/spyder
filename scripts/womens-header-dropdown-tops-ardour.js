var ardour = document.querySelector(".ardour");
var ardourFront = document.querySelector(".ardour-front");
var ardourBack = document.querySelector(".ardour-back");



//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

ardour.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardour/ardour.jpg";
});

ardourFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardour/ardour-front.jpg";
});

ardourBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardour/ardour-back.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















