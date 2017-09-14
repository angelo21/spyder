var athletic = document.querySelector(".athletic");
var athleticFront = document.querySelector(".athletic-front");
var athleticBack = document.querySelector(".athletic-back");
var athleticBackZoom = document.querySelector(".athletic-back-zoom");
var athleticlogo = document.querySelector(".athletic-logo");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

athletic.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/athletic/athletic.jpg";
});

athleticFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/athletic/athletic-front.jpg";
});

athleticBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/athletic/athletic-back.jpg";
});

athleticBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/athletic/athletic-back-zoom.jpg";
});

athleticlogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/athletic/athletic-logo.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















