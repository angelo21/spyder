var strutt = document.querySelector(".strutt");
var struttFront = document.querySelector(".strutt-front");
var struttBack = document.querySelector(".strutt-back");
var struttBackZoom = document.querySelector(".strutt-back-zoom");
var struttlogo = document.querySelector(".strutt-logo");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

strutt.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/strutt/strutt.jpg";
});

struttFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/strutt/strutt-front.jpg";
});

struttBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/strutt/strutt-back.jpg";
});

struttBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/strutt/strutt-back-zoom.jpg";
});

struttlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/strutt/strutt-logo.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















