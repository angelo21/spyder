var blytz = document.querySelector(".blytz");
var blytzFront = document.querySelector(".blytz-front");
var blytzBack = document.querySelector(".blytz-back");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


blytz.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/blytz/blytz.jpg";
})

blytzFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/blytz/blytz-front.jpg";
})

blytzBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-lifestyle/blytz/blytz-back.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















