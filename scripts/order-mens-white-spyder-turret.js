var turret = document.querySelector(".turret");
var turretFront = document.querySelector(".turret-front");
var turretBack = document.querySelector(".turret-back");
var turretBackZoom = document.querySelector(".turret-back-zoom");
var turretLogo = document.querySelector(".turret-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


turret.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/turret/turret.jpg";
});

turretFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/turret/turret-front.jpg";
});

turretBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/turret/turret-back.jpg";
});

turretBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/turret/turret-back-zoom.jpg";
});

turretLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/turret/turret-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















