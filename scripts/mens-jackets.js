var dolomiteFullZip = document.querySelector("#dolomite-full-zip");
var eigerShellJacket = document.querySelector("#eiger-shell");
var garmisch = document.querySelector("#garmisch");
var vyper = document.querySelector("#vyper");
var pinnacle = document.querySelector("#pinacle");
var antiPanicShell = document.querySelector("#anti-panic-shell");

dolomiteFullZip.addEventListener("mouseenter", function() {
    dolomiteFullZip.style.cursor = "pointer";
    dolomiteFullZip.src = "images/mens/mens-jackets/dolomite-full-zip-down-hover.jpg";
}),dolomiteFullZip.addEventListener("mouseleave", function() {
    dolomiteFullZip.src = "images/mens/mens-jackets/dolomite-full-zip-down.jpg";
}), dolomiteFullZip.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-dolomite.html";
    });

eigerShellJacket.addEventListener("mouseenter", function() {
    eigerShellJacket.style.cursor = "pointer";
    eigerShellJacket.src = "images/mens/mens-jackets/eiger-shell-hover.jpg";
}),eigerShellJacket.addEventListener("mouseleave", function() {
    eigerShellJacket.src = "images/mens/mens-jackets/eiger-shell.jpg";
}), eigerShellJacket.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-eiger.html";
    });

garmisch.addEventListener("mouseenter", function() {
    garmisch.style.cursor = "pointer";
    garmisch.src = "images/mens/mens-jackets/garmisch-hover.jpg";
}),garmisch.addEventListener("mouseleave", function() {
    garmisch.src = "images/mens/mens-jackets/garmisch.jpg";
}), garmisch.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-garmisch.html";
    });

vyper.addEventListener("mouseenter", function() {
    vyper.style.cursor = "pointer";
    vyper.src = "images/mens/mens-jackets/vyper-hover.jpg";
}),vyper.addEventListener("mouseleave", function() {
    vyper.src = "images/mens/mens-jackets/vyper.jpg";
}), vyper.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-vyper.html";
    });

pinnacle.addEventListener("mouseenter", function() {
    pinnacle.style.cursor = "pointer";
    pinnacle.src = "images/mens/mens-jackets/pinnacle-hover.jpg";
}),pinnacle.addEventListener("mouseleave", function() {
    pinnacle.src = "images/mens/mens-jackets/pinnacle.jpg";
}), pinnacle.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-pinnacle.html";
    });

antiPanicShell.addEventListener("mouseenter", function() {
    antiPanicShell.style.cursor = "pointer";
    antiPanicShell.src = "images/mens/mens-jackets/anti-panic-shell-hover.jpg";
}),antiPanicShell.addEventListener("mouseleave", function() {
    antiPanicShell.src = "images/mens/mens-jackets/anti-panic-shell.jpg";
}),antiPanicShell.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-jackets-panic.html";
    });




















