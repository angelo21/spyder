var long = document.querySelector(".long");
var longBack = document.querySelector(".long-back");
var longFront = document.querySelector(".long-front");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

long.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/long/long.jpg";
});

longBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/long/long-back.jpg";
});

longFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/long/long-front.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















