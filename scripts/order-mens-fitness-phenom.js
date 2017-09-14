var phenom = document.querySelector(".phenom");
var phenomFront = document.querySelector(".phenom-front");
var phenomBack = document.querySelector(".phenom-back");
var phenomBackZoom = document.querySelector(".phenom-back-zoom");
var phenomLogo = document.querySelector(".phenom-logo");

//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");


phenom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/phenom/phenom.jpg";
});

phenomFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/phenom/phenom-front.jpg";
});

phenomBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/phenom/phenom-back.jpg";
});

phenomBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/phenom/phenom-back-zoom.jpg";
});

phenomLogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/mens/mens-fitness/phenom/phenom-logo.jpg";
});



//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















