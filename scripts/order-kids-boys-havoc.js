var havoc = document.querySelector(".havoc");
var havocBack = document.querySelector(".havoc-back");
var havoclogo = document.querySelector(".havoc-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 havoc.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/havoc/havoc.jpg";
})
 havocBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/havoc/havoc-back.jpg";
})
 havoclogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/havoc/havoc-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















