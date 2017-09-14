var manic = document.querySelector(".manic");
var manicFront = document.querySelector(".manic-front");
var manicBack = document.querySelector(".manic-back");
var manicBackZoom = document.querySelector(".manic-back-zoom");
var manicLogo = document.querySelector(".manic-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


manic.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-manic/manic.jpg";
});

manicFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-manic/manic-front.jpg";
});

manicBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-manic/manic-back.jpg";
});

manicBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-manic/manic-back-zoom.jpg";
});

manicLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-lifestyle/mens-lifestyle-manic/manic-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















