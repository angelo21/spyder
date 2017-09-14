var dolomite = document.querySelector(".dolomite");
var dolomiteFront = document.querySelector(".dolomite-front");
var dolomiteBack = document.querySelector(".dolomite-back");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

dolomite.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/dolomite/dolomite.jpg";
});
dolomiteFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/dolomite/dolomite-front.jpg";
});
dolomiteBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/jackets/dolomite/dolomite-back.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















