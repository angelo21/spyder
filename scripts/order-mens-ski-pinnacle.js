var pinnacle = document.querySelector(".pinnacle");
var pinnacleFront = document.querySelector(".pinnacle-front");
var pinnacleBack = document.querySelector(".pinnacle-back");
var pinnacleBackZoom = document.querySelector(".pinnacle-back-zoom");
var pinnacleLogo = document.querySelector(".pinnacle-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


pinnacle.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/pinnacle/pinnacle.jpg";
});

pinnacleFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/pinnacle/pinnacle-front.jpg";
});

pinnacleBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/pinnacle/pinnacle-back.jpg";
});

pinnacleBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/pinnacle/pinnacle-back-zoom.jpg";
});

pinnacleLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-ski/pinnacle/pinnacle-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















