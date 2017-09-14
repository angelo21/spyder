var nordwand = document.querySelector(".nordwand");
var nordwandFront = document.querySelector(".nordwand-front");
var nordwandBack = document.querySelector(".nordwand-back");
var nordwandBackZoom = document.querySelector(".nordwand-back-zoom");
var nordwandLogo = document.querySelector(".nordwand-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


nordwand.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/nordwand/nordwand.jpg";
})

nordwandFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/nordwand/nordwand-front.jpg";
})

nordwandBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/nordwand/nordwand-back.jpg";
})

nordwandBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/nordwand/nordwand-back-zoom.jpg";
})

nordwandLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-white-spyder/nordwand/nordwand-logo.jpg";
})

//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















