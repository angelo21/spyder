var bocca = document.querySelector("#bocca");
var charger = document.querySelector("#charger-therma-stretch");
var chyle = document.querySelector("#chyle");
var linearWeb = document.querySelector("#linear-web");
var speedFleece = document.querySelector("#speed-fleece");
var savona = document.querySelector("#savona");


bocca.addEventListener("mouseenter", function() {
    bocca.style.cursor = "pointer";
    bocca.src = "images/kids/kids-tops/bocca-hover.jpg";
}),bocca.addEventListener("mouseleave", function() {
    bocca.src = "images/kids/kids-tops/bocca.jpg";
}), bocca.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-bocca.html";
    });

charger.addEventListener("mouseenter", function() {
    charger.style.cursor = "pointer";
    charger.src = "images/kids/kids-tops/charger-therma-stretch-hover.jpg";
}),charger.addEventListener("mouseleave", function() {
    charger.src = "images/kids/kids-tops/charger-therma-stretch.jpg";
}), charger.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-charger.html";
    });

chyle.addEventListener("mouseenter", function() {
    chyle.style.cursor = "pointer";
    chyle.src = "images/kids/kids-tops/chyle-hover.jpg";
}),chyle.addEventListener("mouseleave", function() {
    chyle.src = "images/kids/kids-tops/chyle.jpg";
}), chyle.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-velour.html";
    });

linearWeb.addEventListener("mouseenter", function() {
    linearWeb.style.cursor = "pointer";
    linearWeb.src = "images/kids/kids-tops/linear-web-hover.jpg";
}),linearWeb.addEventListener("mouseleave", function() {
    linearWeb.src = "images/kids/kids-tops/linear-web.jpg";
}), linearWeb.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-linear.html";
    });

speedFleece.addEventListener("mouseenter", function() {
    speedFleece.style.cursor = "pointer";
    speedFleece.src = "images/kids/kids-tops/speed-fleece-hover.jpg";
}),speedFleece.addEventListener("mouseleave", function() {
    speedFleece.src = "images/kids/kids-tops/speed-fleece.jpg";
}), speedFleece.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-speed.html";
    });

savona.addEventListener("mouseenter", function() {
    savona.style.cursor = "pointer";
    savona.src = "images/kids/kids-tops/savona-hover.jpg";
}),savona.addEventListener("mouseleave", function() {
    savona.src = "images/kids/kids-tops/savona.jpg";
}), savona.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-tops-savona.html";
    });



