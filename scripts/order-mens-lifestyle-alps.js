var alps = document.querySelector(".alps");
var alpsFront = document.querySelector(".alps-front");
var alpsBack = document.querySelector(".alps-back");
var alpsBackZoom = document.querySelector(".alps-back-zoom");
var alpsLogo = document.querySelector(".alps-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


alps.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-alps/alps.jpg";
});

alpsFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-alps/alps-front.jpg";
});

alpsBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-alps/alps-back.jpg";
});

alpsBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-alps/alps-back-zoom.jpg";
});

alpsLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-alps/alps-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















