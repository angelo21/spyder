var paramountStryke = document.querySelector("#paramount-stryke");
var constantStryke = document.querySelector("#constant-stryke");
var foremostStryke = document.querySelector("#foremost-stryke");
var legendStryke = document.querySelector("#legend-stryke");
var outboundStryke = document.querySelector("#outbound-stryke");

paramountStryke.addEventListener("mouseenter", function() {
    paramountStryke.style.cursor = "pointer";
    paramountStryke.src = "images/mens/mens-tops/paramount-stryke-hover.jpg";
}),paramountStryke.addEventListener("mouseleave", function() {
    paramountStryke.src = "images/mens/mens-tops/paramount-stryke.jpg";
}), paramountStryke.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-tops-paramount.html";
    });

constantStryke.addEventListener("mouseenter", function() {
    constantStryke.style.cursor = "pointer";
    constantStryke.src = "images/mens/mens-tops/constant-stryke-hover.jpg";
}),constantStryke.addEventListener("mouseleave", function() {
    constantStryke.src = "images/mens/mens-tops/constant-stryke.jpg";
}), constantStryke.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-tops-constant.html";
    });

foremostStryke.addEventListener("mouseenter", function() {
    foremostStryke.style.cursor = "pointer";
    foremostStryke.src = "images/mens/mens-tops/foremost-stryke-hover.jpg";
}),foremostStryke.addEventListener("mouseleave", function() {
    foremostStryke.src = "images/mens/mens-tops/foremost-stryke.jpg";
}), foremostStryke.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-tops-foremost.html";
    });

legendStryke.addEventListener("mouseenter", function() {
    legendStryke.style.cursor = "pointer";
}), legendStryke.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-tops-legend.html";
    });

outboundStryke.addEventListener("mouseenter", function() {
    outboundStryke.style.cursor = "pointer";
}), outboundStryke.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-tops-outbound.html";
    });

