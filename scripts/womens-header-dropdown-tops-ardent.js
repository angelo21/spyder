var ardent = document.querySelector(".ardent");
var ardentFront = document.querySelector(".ardent-front");
var ardentBack = document.querySelector(".ardent-back");




//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

ardent.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardent/ardent.jpg";
});

ardentFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardent/ardent-front.jpg";
});

ardentBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/tops/ardent/ardent-back.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















