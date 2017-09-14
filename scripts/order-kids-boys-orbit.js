var orbit = document.querySelector(".orbit");
var orbitBack = document.querySelector(".orbit-back");
var orbitlogo = document.querySelector(".orbit-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

 orbit.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/orbit/orbit.jpg";
})
 orbitBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/orbit/orbit-back.jpg";
})
 orbitlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/kids/kids-boys/orbit/orbit-logo.jpg";
})


//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















