var aura = document.querySelector("#aura");
var tank = document.querySelector("#tank");
var slash = document.querySelector("#slash");
var blytz = document.querySelector("#blytz");
var lyra = document.querySelector("#lyra");
var acqyre = document.querySelector("#acqyre");


aura.addEventListener("mouseenter", function() {
    aura.style.cursor = "pointer";
    aura.src = "images/womens/fitness/aura-hover.jpg"
}),aura.addEventListener("mouseleave", function() {
   aura.src = "images/womens/fitness/aura.jpg" 
}),aura.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-aura.html";
});

tank.addEventListener("mouseenter", function() {
    tank.style.cursor = "pointer";
    tank.src = "images/womens/fitness/tank-hover.jpg"
}),tank.addEventListener("mouseleave", function() {
   tank.src = "images/womens/fitness/tank.jpg" 
}),tank.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-aura-tank.html";
});

slash.addEventListener("mouseenter", function() {
    slash.style.cursor = "pointer";
    slash.src = "images/womens/fitness/slash-hover.jpg"
}),slash.addEventListener("mouseleave", function() {
   slash.src = "images/womens/fitness/slash.jpg" 
}),slash.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-slash.html";
});

blytz.addEventListener("mouseenter", function() {
    blytz.style.cursor = "pointer";
    blytz.src = "images/womens/fitness/blytz-hover.jpg"
}),blytz.addEventListener("mouseleave", function() {
   blytz.src = "images/womens/fitness/blytz.jpg" 
}),blytz.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-blytz.html";
});

lyra.addEventListener("mouseenter", function() {
    lyra.style.cursor = "pointer";
    lyra.src = "images/womens/fitness/lyra-hover.jpg"
}),lyra.addEventListener("mouseleave", function() {
   lyra.src = "images/womens/fitness/lyra.jpg" 
}),lyra.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-lyra.html";
});

acqyre.addEventListener("mouseenter", function() {
    acqyre.style.cursor = "pointer";
    acqyre.src = "images/womens/fitness/acqyre-hover.jpg"
}),acqyre.addEventListener("mouseleave", function() {
   acqyre.src = "images/womens/fitness/acqyre.jpg" 
}),acqyre.addEventListener("click", function() {
    window.location = "order-html/womens-fitness-order/womens-fitness-acqyre.html";
});



