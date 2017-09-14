var orbit = document.querySelector(".orbit");
var orbitFront = document.querySelector(".orbit-front");
var orbitBack = document.querySelector(".orbit-back");
var orbitBackZoom = document.querySelector(".orbit-back-zoom");
var orbitLogo = document.querySelector(".orbit-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


orbit.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-orbit/orbit.jpg";
});

orbitFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-orbit/orbit-front.jpg";
});

orbitBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-orbit/orbit-back.jpg";
});

orbitBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-orbit/orbit-back-zoom.jpg";
});

orbitLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-orbit/orbit-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















