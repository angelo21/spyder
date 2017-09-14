var freshAirSoftshell = document.querySelector("#fresh-air-softshell");
var timelessHoody = document.querySelector("#timeless-hoody");
var timelessDown = document.querySelector("#timeless-down");
var timelessFaux= document.querySelector("#timeless-faux-down");
var timelessGreenDown = document.querySelector("#timeless-green-down");
var timelessRedDown = document.querySelector("#timeless-red-down");


freshAirSoftshell.addEventListener("mouseenter", function() {
    freshAirSoftshell.style.cursor = "pointer";
    freshAirSoftshell.src = "images/womens/womens-jackets/fresh-air-softshell-hover.jpg";
}),freshAirSoftshell.addEventListener("mouseleave", function() {
    freshAirSoftshell.src = "images/womens/womens-jackets/fresh-air-softshell.jpg";
}), freshAirSoftshell.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-usst.html";
    });

timelessHoody.addEventListener("mouseenter", function() {
    timelessHoody.style.cursor = "pointer";
    timelessHoody.src = "images/womens/womens-jackets/timeless-hoody-hover.jpg";
}),timelessHoody.addEventListener("mouseleave", function() {
    timelessHoody.src = "images/womens/womens-jackets/timeless-hoody.jpg";
}), timelessHoody.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-timeless.html";
    });

timelessDown.addEventListener("mouseenter", function() {
    timelessDown.style.cursor = "pointer";
    timelessDown.src = "images/womens/womens-jackets/timeless-down-hover.jpg";
}),timelessDown.addEventListener("mouseleave", function() {
    timelessDown.src = "images/womens/womens-jackets/timeless-down.jpg";
}), timelessDown.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-long.html";
    });

timelessFaux.addEventListener("mouseenter", function() {
    timelessFaux.style.cursor = "pointer";
    timelessFaux.src = "images/womens/womens-jackets/timeless-faux-down-hover.jpg";
}),timelessFaux.addEventListener("mouseleave", function() {
    timelessFaux.src = "images/womens/womens-jackets/timeless-faux-down.jpg";
}), timelessFaux.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-faux.html";
    });

timelessGreenDown.addEventListener("mouseenter", function() {
    timelessGreenDown.style.cursor = "pointer";
    timelessGreenDown.src = "images/womens/womens-jackets/timeless-green-down-hover.jpg";
}),timelessGreenDown.addEventListener("mouseleave", function() {
    timelessGreenDown.src = "images/womens/womens-jackets/timeless-green-down.jpg";
}), timelessGreenDown.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-hoody.html";
    });

timelessRedDown.addEventListener("mouseenter", function() {
    timelessRedDown.style.cursor = "pointer";
    timelessRedDown.src = "images/womens/womens-jackets/timeless-red-down-hover.jpg";
}),timelessRedDown.addEventListener("mouseleave", function() {
    timelessRedDown.src = "images/womens/womens-jackets/timeless-red-down.jpg";
}), timelessRedDown.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-jackets-down.html";
    });






















