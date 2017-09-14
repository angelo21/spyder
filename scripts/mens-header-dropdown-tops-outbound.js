var outbound = document.querySelector(".outbound");
var outboundBack = document.querySelector(".outbound-back");
var outboundLogo = document.querySelector(".outbound-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

outbound.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/outbound/outbound.jpg";
});

outboundBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/outbound/outbound-back.jpg";
});


outboundLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-header-dropdown/tops/outbound/outbound-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















