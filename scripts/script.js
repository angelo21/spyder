
/******************************hide header on scroll******************/
/*********************************************************************/
(function() {
    var new_scroll_position = 0;
    var last_scroll_position;
    var header = document.getElementById("top");
    var fixedHeader = document.getElementById("header");
    
    window.addEventListener("load", function() {
        if(window.innerWidth > 639) {
            window.addEventListener('scroll', function(e) {
              last_scroll_position = window.scrollY;

              // Scrolling down
              if (new_scroll_position < last_scroll_position && last_scroll_position > 20) {

                fixedHeader.classList.add("fixMe");

              // Scrolling up
              } else if (new_scroll_position > last_scroll_position && last_scroll_position < 20) {

                  fixedHeader.classList.remove("fixMe");

              }

              new_scroll_position = last_scroll_position;
            });
        }
    });
})();



/*******************indicate what page is active**********************/
/*********************************************************************/
(function() {
    var title = document.querySelector("title");
    var change = title.textContent;


    switch(change) {
        case "Home":
            document.querySelector(".indicator-home").style.color = "#E93C2D";
            break;
        case "Mens":
            document.querySelector(".indicator-mens").style.color = "#E93C2D";
            break;
        case "Womens":
            document.querySelector(".indicator-womens").style.color = "#E93C2D";
            break;
        case "Kids":
            document.querySelector(".indicator-kids").style.color = "#E93C2D";
            break;
        default:
            header.style.color = "white";
            break;
    }
})();

/*****************************************************************************************Add To Cart With Local Storage*********************/
var addToCart = document.getElementById("add-to-cart");
var updateCart = document.getElementById("cart");
var quantity = document.querySelector("#quantity select");
var size = document.querySelector("#size select");
var error = document.querySelector(".error_popup");

window.addEventListener("load", function() {
    if(localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", "0");
    }
    updateCart.textContent = localStorage.getItem("cart");
});
function cartAdd() {
   addToCart.addEventListener('click', function() {
       if(size.value != "-") {
            localStorage.setItem("cart", Number(quantity.value) + Number(updateCart.textContent));
           updateCart.textContent = localStorage.getItem("cart");
           error.textContent = "";
        } else {
            error.textContent = "Please select a size";
        }
    });
}
if(addToCart != null) {
    cartAdd();
}

/********************************************************************************Remove Items From Cart And Update Local Storage*************/
var cartUpdateButton = document.querySelector(".cart_update_button");


cartUpdateButton.addEventListener("click", function() {
    updateCart.textContent = 0;
    localStorage.setItem("cart", 0);
    updateCartText.textContent = updateCart.textContent;
});

/***************************************************************************************Clicking on Cart Opens Menu**************************/
var clickCart = document.querySelector(".fa-shopping-cart");
var showCartMenu = document.querySelector(".cart_update");
var updateCartText = document.querySelector(".cart_update_text");

clickCart.addEventListener("click", function() {
    showCartMenu.classList.toggle("cart_update_hide_show");
    updateCartText.textContent = updateCart.textContent;
});

/*********************************************************************************************Login with local storage*******************/
var loginEmail = document.querySelector(".login_registered_customer_email");
var loginPassword = document.querySelector(".login_registered_customer_password");
var loginButton = document.querySelector(".login_button");
var loginText = document.querySelector(".welcome");
var logout = document.querySelector(".logout");
var inAndOut;
var loginError = document.querySelector(".login_error");
var loginSuccessful = document.querySelector(".login_successful");


window.addEventListener("load", function() {
    if(localStorage.getItem("loginState") === null) {
        localStorage.setItem("loginState", "Login");
    }
    loginText.textContent = localStorage.getItem("loginState");
});

loginText.textContent = localStorage.getItem("loginState");
if(loginButton) {
    loginButton.addEventListener("click",function(e) {
        e.preventDefault();
        if(loginEmail.value === localStorage.getItem("email") && loginPassword.value === localStorage.getItem("password")) {
            loginEmail.value = "";
            loginPassword.value = "";
            inAndOut = "Sign Out";
            localStorage.setItem("loginState", inAndOut);
            loginText.textContent = localStorage.getItem("loginState");
            loginSuccessful.style.display = "block";
            loginError.style.display = "none";
        } else {
            loginError.style.display = "block";
            loginSuccessful.style.display = "none";
        }
    });
}

logout.addEventListener("click", function(e) {
    if(loginText.textContent === "Sign Out") {
        e.preventDefault();
        inAndOut = "Login";
        localStorage.setItem("loginState", inAndOut);
        loginText.textContent = localStorage.getItem("loginState");
        loginSuccessful.style.display = "none";
    }
});

/************************************************************************************************Hamburger Menu******************************/
var hamburger = document.querySelector(".fa-bars");
var departments = document.querySelector("#departments");
var sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function() {
    sidebar.classList.toggle("sidebar_toggle");
    departments.classList.toggle("department_toggle");
});


/****************************************************************************************************small screen side dropdown**********************/

var plusOne = document.querySelector(".plus_one");
var plusTwo = document.querySelector(".plus_two");
var plusThree = document.querySelector(".plus_three");
var revealOne = document.querySelector(".reveal_one");
var revealTwo = document.querySelector(".reveal_two");
var revealThree = document.querySelector(".reveal_three");

plusOne.addEventListener("click", function() {
    revealOne.classList.toggle("dropdown_toggle");
});
plusTwo.addEventListener("click", function() {
     revealTwo.classList.toggle("dropdown_toggle");
});
plusThree.addEventListener("click", function() {
    revealThree.classList.toggle("dropdown_toggle");
});





















