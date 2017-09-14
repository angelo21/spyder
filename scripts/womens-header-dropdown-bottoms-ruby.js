var ruby = document.querySelector(".ruby");
var rubyFront = document.querySelector(".ruby-front");
var rubyBack = document.querySelector(".ruby-back");
var rubyBackZoom = document.querySelector(".ruby-back-zoom");
var rubylogo = document.querySelector(".ruby-logo");


//////////////////////update quantity//////////////////////////////
///////////////////////////////////////////////////////////////////
var quantityNumber = document.querySelector("#quantity-number");
var quantity = document.querySelector("#quantity select");

var imageChange = document.querySelector("#image-change");

ruby.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/ruby/ruby.jpg";
});

rubyFront.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/ruby/ruby-front.jpg";
});

rubyBack.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/ruby/ruby-back.jpg";
});

rubyBackZoom.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/ruby/ruby-back-zoom.jpg";
});

rubylogo.addEventListener("click", function() {
    imageChange.src = "../../images/order-description/womens/womens-header-dropdown/bottoms/ruby/ruby-logo.jpg";
});





//////////////////////////update quantity//////////////////////////////
//////////////////////////////////////////////////////////////////////
quantity.addEventListener("click", function() {
    quantityNumber.textContent = quantity.value;
})















