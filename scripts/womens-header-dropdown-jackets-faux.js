var faux = document.querySelector(".faux");
var fauxBack = document.querySelector(".faux-back");
var fauxFront = document.querySelector(".faux-front");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

faux.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/faux/faux.jpg";
});

fauxBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/faux/faux-back.jpg";
});

fauxFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/jackets/faux/faux-front.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})
















