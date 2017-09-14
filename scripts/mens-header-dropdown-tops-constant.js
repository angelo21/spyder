var constant = document.querySelector(".constant");
var constantLogo = document.querySelector(".constant-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

constant.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/constant/constant.jpg";
});

constantLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/constant/constant-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















