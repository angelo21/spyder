var winnerTailored = document.querySelector("#tailored-fit");
var winnerAthletic = document.querySelector("#winner-athletic");
var armourPant = document.querySelector("#armour-pant");
var rubyPant = document.querySelector("#ruby-pant");
var struttSoftshell = document.querySelector("#strutt-softshell");
var paintedOn = document.querySelector("#painted-on");


winnerTailored.addEventListener("mouseenter", function() {
    winnerTailored.style.cursor = "pointer";
    winnerTailored.src = "images/womens/womens-bottoms/winner-tailored-fit-hover.jpg";
}),winnerTailored.addEventListener("mouseleave", function() {
    winnerTailored.src = "images/womens/womens-bottoms/winner-tailored-fit.jpg";
}), winnerTailored.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-tailored.html";
    });

winnerAthletic.addEventListener("mouseenter", function() {
    winnerAthletic.style.cursor = "pointer";
    winnerAthletic.src = "images/womens/womens-bottoms/winner-athletic-fit-hover.jpg";
}),winnerAthletic.addEventListener("mouseleave", function() {
    winnerAthletic.src = "images/womens/womens-bottoms/winner-athletic-fit.jpg";
}), winnerAthletic.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-athletic.html";
    });

armourPant.addEventListener("mouseenter", function() {
    armourPant.style.cursor = "pointer";
    armourPant.src = "images/womens/womens-bottoms/armour-pant-hover.jpg";
}),armourPant.addEventListener("mouseleave", function() {
    armourPant.src = "images/womens/womens-bottoms/armour-pant.jpg";
}), armourPant.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-amour.html";
    });

rubyPant.addEventListener("mouseenter", function() {
    rubyPant.style.cursor = "pointer";
    rubyPant.src = "images/womens/womens-bottoms/ruby-pant-hover.jpg";
}),rubyPant.addEventListener("mouseleave", function() {
    rubyPant.src = "images/womens/womens-bottoms/ruby-pant.jpg";
}), rubyPant.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-ruby.html";
    });

struttSoftshell.addEventListener("mouseenter", function() {
    struttSoftshell.style.cursor = "pointer";
    struttSoftshell.src = "images/womens/womens-bottoms/strutt-softshell-hover.jpg";
}),struttSoftshell.addEventListener("mouseleave", function() {
    struttSoftshell.src = "images/womens/womens-bottoms/strutt-softshell.jpg";
}), struttSoftshell.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-strutt.html";
    });

paintedOn.addEventListener("mouseenter", function() {
    paintedOn.style.cursor = "pointer";
    paintedOn.src = "images/womens/womens-bottoms/painted-on-hover.jpg";
}),paintedOn.addEventListener("mouseleave", function() {
    paintedOn.src = "images/womens/womens-bottoms/painted-on.jpg";
}), paintedOn.addEventListener("click", function() {
        window.location = "order-html/womens-header-dropdown/womens-bottoms-painted.html";
    });






















