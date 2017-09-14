var bernese = document.querySelector(".bernese");
var berneseFront = document.querySelector(".bernese-front");
var berneseBack = document.querySelector(".bernese-back");
var berneseBackZoom = document.querySelector(".bernese-back-zoom");
var berneselogo = document.querySelector(".bernese-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


bernese.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/bernese/bernese.jpg";
})

berneseFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/bernese/bernese-front.jpg";
})

berneseBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/bernese/bernese-back.jpg";
})

berneseBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/bernese/bernese-back-zoom.jpg";
})

berneselogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-ski/bernese/bernese-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















