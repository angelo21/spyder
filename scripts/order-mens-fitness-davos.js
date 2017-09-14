var davos = document.querySelector(".davos");
var davosFront = document.querySelector(".davos-front");
var davosBack = document.querySelector(".davos-back");
var davosBackZoom = document.querySelector(".davos-back-zoom");
var davosLogo = document.querySelector(".davos-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


davos.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/davos/davos.jpg";
});

davosFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/davos/davos-front.jpg";
});

davosBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/davos/davos-back.jpg";
});

davosBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/davos/davos-back-zoom.jpg";
});

davosLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/davos/davos-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















