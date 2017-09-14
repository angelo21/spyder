var rhodes = document.querySelector(".rhodes");
var rhodesFront = document.querySelector(".rhodes-front");
var rhodesBack = document.querySelector(".rhodes-back");
var rhodesBackZoom = document.querySelector(".rhodes-back-zoom");
var rhodesLogo = document.querySelector(".rhodes-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


rhodes.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/rhodes/rhodes.jpg";
});

rhodesFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/rhodes/rhodes-front.jpg";
});

rhodesBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/rhodes/rhodes-back.jpg";
});

rhodesBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/rhodes/rhodes-back-zoom.jpg";
});

rhodesLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/rhodes/rhodes-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















