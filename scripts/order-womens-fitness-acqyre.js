var acqyre = document.querySelector(".acqyre");
var acqyreFront = document.querySelector(".acqyre-front");
var acqyreBack = document.querySelector(".acqyre-back");
var acqyreBackZoom = document.querySelector(".acqyre-back-zoom");
var acqyrelogo = document.querySelector(".acqyre-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


acqyre.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/acqyre/acqyre.jpg";
})

acqyreFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/acqyre/acqyre-front.jpg";
})

acqyreBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/acqyre/acqyre-back.jpg";
})

acqyreBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/acqyre/acqyre-back-zoom.jpg";
})

acqyrelogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-fitness/acqyre/acqyre-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















