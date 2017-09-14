var raptShell = document.querySelector("#rapt-shell");
var newmanTop = document.querySelector("#newman-top");
var conveyPant = document.querySelector("#convey-pant");
var techShort = document.querySelector("#tech-short");
var techTee = document.querySelector("#tech-tee");
var gogoShort = document.querySelector("#gogo-short");


raptShell.addEventListener("mouseenter", function() {
    raptShell.style.cursor = "pointer";
    raptShell.src = "images/womens/womens-lifestyle/rapt-shell-parka-hover.jpg";
}), raptShell.addEventListener("mouseleave", function() {
    raptShell.src = "images/womens/womens-lifestyle/rapt-shell-parka.jpg";
}), raptShell.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-rapt.html";
    });

newmanTop.addEventListener("mouseenter", function() {
    newmanTop.style.cursor = "pointer";
    newmanTop.src = "images/womens/womens-lifestyle/newman-top-hover.jpg";
}), newmanTop.addEventListener("mouseleave", function() {
    newmanTop.src = "images/womens/womens-lifestyle/newman-top.jpg";
}), newmanTop.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-newman.html";
    });

conveyPant.addEventListener("mouseenter", function() {
    conveyPant.style.cursor = "pointer";
    conveyPant.src = "images/womens/womens-lifestyle/convey-pant-hover.jpg";
}), conveyPant.addEventListener("mouseleave", function() {
    conveyPant.src = "images/womens/womens-lifestyle/convey-pant.jpg";
}), conveyPant.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-convey.html";
    });

techShort.addEventListener("mouseenter", function() {
    techShort.style.cursor = "pointer";
    techShort.src = "images/womens/womens-lifestyle/tech-short-hover.jpg";
}), techShort.addEventListener("mouseleave", function() {
    techShort.src = "images/womens/womens-lifestyle/tech-short.jpg";
}), techShort.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-wyser.html"
    });

techTee.addEventListener("mouseenter", function() {
    techTee.style.cursor = "pointer";
    techTee.src = "images/womens/womens-lifestyle/tech-tee-hover.jpg";
}), techTee.addEventListener("mouseleave", function() {
    techTee.src = "images/womens/womens-lifestyle/tech-tee.jpg";
}), techTee.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-blytz.html";
    });

gogoShort.addEventListener("mouseenter", function() {
    gogoShort.style.cursor = "pointer";
    gogoShort.src = "images/womens/womens-lifestyle/gogo-short-hover.jpg";
}), gogoShort.addEventListener("mouseleave", function() {
    gogoShort.src = "images/womens/womens-lifestyle/gogo-short.jpg";
}), gogoShort.addEventListener("click", function() {
        window.location = "order-html/womens-lifestyle-order/womens-lifestyle-gogo.html";
    });














