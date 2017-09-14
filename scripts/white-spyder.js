var turret = document.querySelector("#turret");
var pryme = document.querySelector("#pryme");
var nordwand = document.querySelector("#nordwand");
var exit = document.querySelector("#exit");
var eiger = document.querySelector("#eiger");
var eigerShell = document.querySelector("#eiger-shell");


turret.addEventListener("mouseenter", function() {
    turret.style.cursor = "pointer";
    turret.src = "images/mens/white-spyder/turret-shell-hover.jpg"
}),turret.addEventListener("mouseleave", function() {
   turret.src = "images/mens/white-spyder/turret-shell.jpg" 
}), turret.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-turret.html";
});

pryme.addEventListener("mouseenter", function() {
    pryme.style.cursor = "pointer";
    pryme.src = "images/mens/white-spyder/pryme-yellow-hover.jpg"
}),pryme.addEventListener("mouseleave", function() {
   pryme.src = "images/mens/white-spyder/turret-shell.jpg" 
}), pryme.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-pryme.html";
});
nordwand.addEventListener("mouseenter", function() {
    nordwand.style.cursor = "pointer";
    nordwand.src = "images/mens/white-spyder/nordwand-hover.jpg"
}),nordwand.addEventListener("mouseleave", function() {
   nordwand.src = "images/mens/white-spyder/turret-shell.jpg" 
}), nordwand.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-nordwand.html";
});

exit.addEventListener("mouseenter", function() {
    exit.style.cursor = "pointer";
    exit.src = "images/mens/white-spyder/exit-insulator-hover.jpg"
}),exit.addEventListener("mouseleave", function() {
   exit.src = "images/mens/white-spyder/exit-insulator.jpg" 
}), exit.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-exit.html";
});

eiger.addEventListener("mouseenter", function() {
    eiger.style.cursor = "pointer";
    eiger.src = "images/mens/white-spyder/eiger-wool-hover.jpg"
}),eiger.addEventListener("mouseleave", function() {
   eiger.src = "images/mens/white-spyder/eiger-wool.jpg" 
}), eiger.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-eiger-wool.html";
});

eigerShell.addEventListener("mouseenter", function() {
    eigerShell.style.cursor = "pointer";
    eigerShell.src = "images/mens/white-spyder/eiger-shell-hover.jpg"
}),eigerShell.addEventListener("mouseleave", function() {
   eigerShell.src = "images/mens/white-spyder/eiger-shell.jpg" 
}), eigerShell.addEventListener("click", function() {
    window.location = "order-html/mens-white-spyder/mens-white-spyder-eiger-shell.html";
});