var pryme = document.querySelector(".pryme");
var prymeFront = document.querySelector(".pryme-front");
var prymeBack = document.querySelector(".pryme-back");
var prymeBackZoom = document.querySelector(".pryme-back-zoom");
var prymelogo = document.querySelector(".pryme-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 pryme.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/pryme/pryme.jpg";
})
 prymeFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/pryme/pryme-front.jpg";
})
 prymeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/pryme/pryme-back.jpg";
})
 prymeBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/pryme/pryme-back-zoom.jpg";
})
 prymelogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/pryme/pryme-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















