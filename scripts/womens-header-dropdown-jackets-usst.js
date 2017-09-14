var usst = document.querySelector(".usst");
var usstBackZoom = document.querySelector(".usst-back-zoom");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

usst.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/usst/usst.jpg";
});

usstBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/usst/usst-back-zoom.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















