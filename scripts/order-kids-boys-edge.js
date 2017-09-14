var edge = document.querySelector(".edge");
var edgeBack = document.querySelector(".edge-back");
var edgelogo = document.querySelector(".edge-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 edge.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/edge/edge.jpg";
})
 edgeBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/edge/edge-back.jpg";
})
 edgelogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/edge/edge-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















