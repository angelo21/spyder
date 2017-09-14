var slash = document.querySelector(".slash");
var slashFront = document.querySelector(".slash-front");
var slashBack = document.querySelector(".slash-back");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


slash.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/slash/slash.jpg";
})

slashFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/slash/slash-front.jpg";
})

slashBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/slash/slash-back.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















