var turret = document.querySelector("#turret");
var eiger = document.querySelector("#eiger");
var norwand = document.querySelector("#norwand");
var bernese = document.querySelector("#bernese");
var berner = document.querySelector("#berner");
var jagged = document.querySelector("#jagged");


turret.addEventListener("mouseenter", function() {
    turret.style.cursor = "pointer";
    turret.src = "images/womens/white-spyder/turret-hover.jpg"
}),turret.addEventListener("mouseleave", function() {
   turret.src = "images/womens/white-spyder/turret.jpg" 
}), turret.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-turret.html";
});

eiger.addEventListener("mouseenter", function() {
    eiger.style.cursor = "pointer";
    eiger.src = "images/womens/white-spyder/eiger-hover.jpg"
}),eiger.addEventListener("mouseleave", function() {
   eiger.src = "images/womens/white-spyder/eiger.jpg" 
}), eiger.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-eiger.html";
});

norwand.addEventListener("mouseenter", function() {
    norwand.style.cursor = "pointer";
    norwand.src = "images/womens/white-spyder/norwand-hover.jpg"
}),norwand.addEventListener("mouseleave", function() {
   norwand.src = "images/womens/white-spyder/norwand.jpg" 
}), norwand.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-nordwand.html";
});

bernese.addEventListener("mouseenter", function() {
    bernese.style.cursor = "pointer";
    bernese.src = "images/womens/white-spyder/bernese-hover.jpg"
}),bernese.addEventListener("mouseleave", function() {
   bernese.src = "images/womens/white-spyder/bernese.jpg" 
}), bernese.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-bernese.html";
});

berner.addEventListener("mouseenter", function() {
    berner.style.cursor = "pointer";
    berner.src = "images/womens/white-spyder/berner-hover.jpg"
}),berner.addEventListener("mouseleave", function() {
   berner.src = "images/womens/white-spyder/berner.jpg" 
}), berner.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-berner.html";
});

jagged.addEventListener("mouseenter", function() {
    jagged.style.cursor = "pointer";
    jagged.src = "images/womens/white-spyder/jagged-hover.jpg"
}),jagged.addEventListener("mouseleave", function() {
   jagged.src = "images/womens/white-spyder/jagged.jpg" 
}), jagged.addEventListener("click", function() {
    window.location = "order-html/womens-white-spyder/womens-white-spyder-jagged.html";
});