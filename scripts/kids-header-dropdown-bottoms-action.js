var action = document.querySelector(".action");
var actionBack = document.querySelector(".action-back");







//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

action.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/action/action.jpg";
});

actionBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/action/action-back.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















