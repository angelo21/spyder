var eigerWool = document.querySelector(".eiger-wool");
var eigerWoolFront = document.querySelector(".eiger-wool-front");
var eigerWoolBack = document.querySelector(".eiger-wool-back");
var eigerWoolBackZoom = document.querySelector(".eiger-wool-back-zoom");
var eigerWoolLogo = document.querySelector(".eiger-wool-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


eigerWool.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-wool/eiger-wool.jpg";
});

eigerWoolFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-wool/eiger-wool-front.jpg";
});

eigerWoolBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-wool/eiger-wool-back.jpg";
});

eigerWoolBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-wool/eiger-wool-back-zoom.jpg";
});

eigerWoolLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-wool/eiger-wool-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















