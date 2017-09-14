var momentum = document.querySelector(".momentum");
var momentumBack = document.querySelector(".momentum-back");
var momentumLogo = document.querySelector(".momentum-logo");






//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

momentum.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/momentum/momentum.jpg";
});

momentumBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/momentum/momentum-back.jpg";
});

momentumLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-header-dropdown/bottoms/momentum/momentum-logo.jpg";
});


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















