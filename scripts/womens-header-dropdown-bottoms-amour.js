var amour = document.querySelector(".amour");
var amourFront = document.querySelector(".amour-front");
var amourBack = document.querySelector(".amour-back");
var amourBackZoom = document.querySelector(".amour-back-zoom");
var amourlogo = document.querySelector(".amour-logo");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

amour.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/amour/amour.jpg";
});

amourFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/amour/amour-front.jpg";
});

amourBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/amour/amour-back.jpg";
});

amourBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/amour/amour-back-zoom.jpg";
});

amourlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/amour/amour-logo.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















