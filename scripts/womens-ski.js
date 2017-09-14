var eiger = document.querySelector("#eiger");
var nordwand = document.querySelector("#nordwand");
var bernese = document.querySelector("#bernese");
var glissade = document.querySelector("#glissade");
var pryme = document.querySelector("#pryme");
var hera = document.querySelector("#hera");


eiger.addEventListener("mouseenter", function() {
    eiger.style.cursor = "pointer";
    eiger.src = "images/womens/ski/eiger-hover.jpg"
}),eiger.addEventListener("mouseleave", function() {
   eiger.src = "images/womens/ski/eiger.jpg" 
}), eiger.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-eiger.html";
});

nordwand.addEventListener("mouseenter", function() {
    nordwand.style.cursor = "pointer";
    nordwand.src = "images/womens/ski/nordwand-hover.jpg"
}),nordwand.addEventListener("mouseleave", function() {
   nordwand.src = "images/womens/ski/nordwand.jpg" 
}), nordwand.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-nordwand.html";
});

bernese.addEventListener("mouseenter", function() {
    bernese.style.cursor = "pointer";
    bernese.src = "images/womens/ski/bernese-hover.jpg"
}),bernese.addEventListener("mouseleave", function() {
   bernese.src = "images/womens/ski/bernese.jpg" 
}), bernese.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-bernese.html";
});

glissade.addEventListener("mouseenter", function() {
    glissade.style.cursor = "pointer";
   glissade.src = "images/womens/ski/glissade-hover.jpg"
}),glissade.addEventListener("mouseleave", function() {
   glissade.src = "images/womens/ski/glissade.jpg" 
}), glissade.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-glissade.html";
});

pryme.addEventListener("mouseenter", function() {
    pryme.style.cursor = "pointer";
    pryme.src = "images/womens/ski/pryme-hover.jpg"
}),pryme.addEventListener("mouseleave", function() {
   pryme.src = "images/womens/ski/pryme.jpg" 
}), pryme.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-pryme.html";
});


hera.addEventListener("mouseenter", function() {
    hera.style.cursor = "pointer";
    hera.src = "images/womens/ski/hera-hover.jpg"
}),hera.addEventListener("mouseleave", function() {
   hera.src = "images/womens/ski/hera.jpg" 
}), hera.addEventListener("click", function() {
    window.location = "order-html/womens-ski-order/womens-ski-hera.html";
});







