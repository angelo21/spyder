var prymeShell = document.querySelector("#pryme-shell");
var surgeShell = document.querySelector("#surge-shell");
var rushPant = document.querySelector("#rush-pant");
var rayneShell = document.querySelector("#rayne-shell");

prymeShell.addEventListener("mouseenter", function() {
    prymeShell.style.cursor = "pointer";
   prymeShell.src = "images/womens/womens-rain/pryme-shell-hover.jpg";
}), prymeShell.addEventListener("mouseleave", function() {
    prymeShell.src = "images/womens/womens-rain/pryme-shell.jpg";
}), prymeShell.addEventListener("click", function() {
        window.location = "order-html/womens-rain-order/womens-rain-pryme.html";
    });

surgeShell.addEventListener("mouseenter", function() {
    surgeShell.style.cursor = "pointer";
   surgeShell.src = "images/womens/womens-rain/surge-shell-hover.jpg";
}), surgeShell.addEventListener("mouseleave", function() {
    surgeShell.src = "images/womens/womens-rain/surge-shell.jpg";
}), surgeShell.addEventListener("click", function() {
        window.location = "order-html/womens-rain-order/womens-rain-surge.html";
    });

rushPant.addEventListener("mouseenter", function() {
    rushPant.style.cursor = "pointer";
   rushPant.src = "images/womens/womens-rain/rush-pant-hover.jpg";
}), rushPant.addEventListener("mouseleave", function() {
    rushPant.src = "images/womens/womens-rain/rush-pant.jpg";
}), rushPant.addEventListener("click", function() {
        window.location = "order-html/womens-rain-order/womens-rain-rush.html";
    });

rayneShell.addEventListener("mouseenter", function() {
    rayneShell.style.cursor = "pointer";
   rayneShell.src = "images/womens/womens-rain/rayne-shell-hover.jpg";
}), rayneShell.addEventListener("mouseleave", function() {
    rayneShell.src = "images/womens/womens-rain/rayne-shell.jpg";
}), rayneShell.addEventListener("click", function() {
        window.location = "order-html/womens-rain-order/womens-rain-rayne.html";
    });