var exit = document.querySelector(".exit");
var exitFront = document.querySelector(".exit-front");
var exitBack = document.querySelector(".exit-back");
var exitBackZoom = document.querySelector(".exit-back-zoom");
var exitLogo = document.querySelector(".exit-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


exit.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/exit/exit.jpg";
});

exitFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/exit/exit-front.jpg";
});

exitBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/exit/exit-back.jpg";
});

exitBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/exit/exit-back-zoom.jpg";
});

exitLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-white-spyder/exit/exit-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















