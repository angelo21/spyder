var route = document.querySelector(".route");
var routeFront = document.querySelector(".route-front");
var routeBack = document.querySelector(".route-back");
var routeBackZoom = document.querySelector(".route-back-zoom");
var routeLogo = document.querySelector(".route-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


route.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/route/route.jpg";
});

routeFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/route/route-front.jpg";
});

routeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/route/route-back.jpg";
});

routeBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/route/route-back-zoom.jpg";
});

routeLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/route/route-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















