var eigerShell = document.querySelector(".eiger-shell");
var eigerShellFront = document.querySelector(".eiger-shell-front");
var eigerShellBack = document.querySelector(".eiger-shell-back");
var eigerShellBackZoom = document.querySelector(".eiger-shell-back-zoom");
var eigerShellLogo = document.querySelector(".eiger-shell-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


eigerShell.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-shell/eiger-shell.jpg";
});

eigerShellFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-shell/eiger-shell-front.jpg";
});

eigerShellBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-shell/eiger-shell-back.jpg";
});

eigerShellBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-shell/eiger-shell-back-zoom.jpg";
});

eigerShellLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/eiger-shell/eiger-shell-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















