var eiger = document.querySelector("#eiger");
var pryme = document.querySelector("#pryme");
var bernese = document.querySelector("#bernese");
var pinnacle = document.querySelector("#pinnacle");
var bormio = document.querySelector("#bormio");
var garmisch = document.querySelector("#garmisch");


eiger.addEventListener("mouseenter", function() {
    eiger.style.cursor = "pointer";
    eiger.src = "images/mens/ski/eiger-hover.jpg"
}),eiger.addEventListener("mouseleave", function() {
   eiger.src = "images/mens/ski/eiger.jpg" 
}),eiger.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-eiger.html";
});

pryme.addEventListener("mouseenter", function() {
    pryme.style.cursor = "pointer";
    pryme.src = "images/mens/ski/pryme-hover.jpg"
}),pryme.addEventListener("mouseleave", function() {
   pryme.src = "images/mens/ski/pryme.jpg" 
}),pryme.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-pryme.html";
});

bernese.addEventListener("mouseenter", function() {
    bernese.style.cursor = "pointer";
    bernese.src = "images/mens/ski/bernese-hover.jpg"
}),bernese.addEventListener("mouseleave", function() {
   bernese.src = "images/mens/ski/bernese.jpg" 
}),bernese.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-bernese.html";
});

pinnacle.addEventListener("mouseenter", function() {
    pinnacle.style.cursor = "pointer";
    pinnacle.src = "images/mens/ski/pinnacle-hover.jpg"
}),pinnacle.addEventListener("mouseleave", function() {
   pinnacle.src = "images/mens/ski/pinnacle.jpg" 
}),pinnacle.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-pinnacle.html";
});

bormio.addEventListener("mouseenter", function() {
    bormio.style.cursor = "pointer";
    bormio.src = "images/mens/ski/bormio-hover.jpg"
}),bormio.addEventListener("mouseleave", function() {
   bormio.src = "images/mens/ski/bormio.jpg" 
}),bormio.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-bormio.html";
});

garmisch.addEventListener("mouseenter", function() {
    garmisch.style.cursor = "pointer";
    garmisch.src = "images/mens/ski/garmisch-hover.jpg"
}),garmisch.addEventListener("mouseleave", function() {
   garmisch.src = "images/mens/ski/garmisch.jpg" 
}),garmisch.addEventListener("click", function() {
    window.location = "order-html/mens-ski-order/order-mens-ski-garmisch.html";
});