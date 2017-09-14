var hoody = document.querySelector(".hoody");
var hoodyBack = document.querySelector(".hoody-back");
var hoodyFront = document.querySelector(".hoody-front");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

hoody.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/hoody/hoody.jpg";
});

hoodyBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/hoody/hoody-back.jpg";
});

hoodyFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/hoody/hoody-front.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})
















