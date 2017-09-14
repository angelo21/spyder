var crucial = document.querySelector(".crucial");
var crucialFront = document.querySelector(".crucial-front");
var crucialBack = document.querySelector(".crucial-back");
var crucialBackZoom = document.querySelector(".crucial-back-zoom");
var crucialLogo = document.querySelector(".crucial-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


crucial.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-crucial/crucial.jpg";
});

crucialFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-crucial/crucial-front.jpg";
});

crucialBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-crucial/crucial-back.jpg";
});

crucialBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-crucial/crucial-back-zoom.jpg";
});

crucialLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-crucial/crucial-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















