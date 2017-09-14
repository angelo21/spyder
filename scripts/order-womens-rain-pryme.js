var pryme = document.querySelector(".pryme");
var prymeFront = document.querySelector(".pryme-front");
var prymeBack = document.querySelector(".pryme-back");
var prymeBackZoom = document.querySelector(".pryme-back-zoom");
var prymeLogo = document.querySelector(".pryme-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


pryme.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/pryme/pryme.jpg";
})

prymeFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/pryme/pryme-front.jpg";
})

prymeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/pryme/pryme-back.jpg";
})

prymeBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/pryme/pryme-back-zoom.jpg";
})

prymeLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-rain/pryme/pryme-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















