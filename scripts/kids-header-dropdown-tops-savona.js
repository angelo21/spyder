var savona = document.querySelector(".savona");
var savonaBack = document.querySelector(".savona-back");
var savonaLogo = document.querySelector(".savona-logo");








//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

savona.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/savona/savona.jpg";
});

savonaBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/savona/savona-back.jpg";
});

savonaLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/tops/savona/savona-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
});















