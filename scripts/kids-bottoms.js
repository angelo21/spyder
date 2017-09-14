var momentum = document.querySelector("#momentum");
var vixenAthletic = document.querySelector("#vixen-athletic");
var mimi = document.querySelector("#mimi");
var action = document.querySelector("#action");
var siege = document.querySelector("#siege");
var miniExpedition = document.querySelector("#mini-expedition");


momentum.addEventListener("mouseenter", function() {
    momentum.style.cursor = "pointer";
    momentum.src = "images/kids/kids-bottoms/momentum-fleece-hover.jpg";
}),momentum.addEventListener("mouseleave", function() {
    momentum.src = "images/kids/kids-bottoms/momentum-fleece.jpg";
}), momentum.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-momentum.html";
    });

vixenAthletic.addEventListener("mouseenter", function() {
    vixenAthletic.style.cursor = "pointer";
    vixenAthletic.src = "images/kids/kids-bottoms/vixen-athletic-hover.jpg";
}),vixenAthletic.addEventListener("mouseleave", function() {
    vixenAthletic.src = "images/kids/kids-bottoms/vixen-athletic.jpg";
}), vixenAthletic.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-vixen.html";
    });

mimi.addEventListener("mouseenter", function() {
   mimi.style.cursor = "pointer";
   mimi.src = "images/kids/kids-bottoms/mimi-hover.jpg";
}),mimi.addEventListener("mouseleave", function() {
   mimi.src = "images/kids/kids-bottoms/mimi.jpg";
}), mimi.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-mimi.html";
    });

action.addEventListener("mouseenter", function() {
   action.style.cursor = "pointer";
   action.src = "images/kids/kids-bottoms/action-hover.jpg";
}),action.addEventListener("mouseleave", function() {
   action.src = "images/kids/kids-bottoms/action.jpg";
}), action.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-action.html";
    });

siege.addEventListener("mouseenter", function() {
   siege.style.cursor = "pointer";
   siege.src = "images/kids/kids-bottoms/siege-hover.jpg";
}),siege.addEventListener("mouseleave", function() {
   siege.src = "images/kids/kids-bottoms/siege.jpg";
}), siege.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-siege.html";
    });

miniExpedition.addEventListener("mouseenter", function() {
   miniExpedition.style.cursor = "pointer";
   miniExpedition.src = "images/kids/kids-bottoms/mini-expedition-hover.jpg";
}),miniExpedition.addEventListener("mouseleave", function() {
   miniExpedition.src = "images/kids/kids-bottoms/mini-expedition.jpg";
}), miniExpedition.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-bottoms-expedition.html";
    });





















