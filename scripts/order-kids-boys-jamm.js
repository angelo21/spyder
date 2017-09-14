var jamm = document.querySelector(".jamm");
var jammBack = document.querySelector(".jamm-back");
var jammlogo = document.querySelector(".jamm-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 jamm.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/jamm/jamm.jpg";
})
 jammBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/jamm/jamm-back.jpg";
})
 jammlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/jamm/jamm-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















