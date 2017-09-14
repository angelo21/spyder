var alps = document.querySelector("#alps");
var davos = document.querySelector("#davos");
var waffle = document.querySelector("#waffle");
var phenom = document.querySelector("#phenom");
var route = document.querySelector("#route");
var rhodes = document.querySelector("#rhodes");


alps.addEventListener("mouseenter", function() {
    alps.style.cursor = "pointer";
    alps.src = "images/mens/fitness/alps-hover.jpg"
}),alps.addEventListener("mouseleave", function() {
   alps.src = "images/mens/fitness/alps.jpg" 
}),alps.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-alps.html";
});

davos.addEventListener("mouseenter", function() {
    davos.style.cursor = "pointer";
    davos.src = "images/mens/fitness/davos-hover.jpg"
}),davos.addEventListener("mouseleave", function() {
   davos.src = "images/mens/fitness/davos.jpg" 
}),davos.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-davos.html";
});

waffle.addEventListener("mouseenter", function() {
    waffle.style.cursor = "pointer";
    waffle.src = "images/mens/fitness/waffle-hover.jpg"
}),waffle.addEventListener("mouseleave", function() {
   waffle.src = "images/mens/fitness/waffle.jpg" 
}),waffle.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-waffle.html";
});

phenom.addEventListener("mouseenter", function() {
    phenom.style.cursor = "pointer";
    phenom.src = "images/mens/fitness/phenom-hover.jpg"
}),phenom.addEventListener("mouseleave", function() {
   phenom.src = "images/mens/fitness/phenom.jpg" 
}),phenom.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-phenom.html";
});

route.addEventListener("mouseenter", function() {
    route.style.cursor = "pointer";
    route.src = "images/mens/fitness/route-hover.jpg"
}),route.addEventListener("mouseleave", function() {
   route.src = "images/mens/fitness/route.jpg" 
}),route.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-route.html";
});

rhodes.addEventListener("mouseenter", function() {
    rhodes.style.cursor = "pointer";
    rhodes.src = "images/mens/fitness/rhodes-hover.jpg"
}),rhodes.addEventListener("mouseleave", function() {
   rhodes.src = "images/mens/fitness/rhodes.jpg" 
}),rhodes.addEventListener("click", function() {
    window.location = "order-html/mens-fitness-order/order-mens-fitness-rhodes.html";
});