var crushHoody = document.querySelector("#crush-hoody-fleece-jacket");
var livelyTechTee = document.querySelector("#lively-tech-tee");
var spriteTight = document.querySelector("#sprite-tight");
var varsityFleecePant = document.querySelector("#varsity-fleece-pant");


crushHoody.addEventListener("mouseenter", function() {
    crushHoody.style.cursor = "pointer";
    crushHoody.src = "images/kids/shop-girls/crush-hoody-fleece-jacket-hover.jpg"
}), crushHoody.addEventListener("mouseleave", function() {
    crushHoody.src = "images/kids/shop-girls/crush-hoody-fleece-jacket.jpg";
}), crushHoody.addEventListener("click", function() {
        window.location = "order-html/kids-girls/girls-crush.html";
    });

livelyTechTee.addEventListener("mouseenter", function() {
    livelyTechTee.style.cursor = "pointer";
    livelyTechTee.src = "images/kids/shop-girls/lively-tech-tee-hover.jpg"
}), livelyTechTee.addEventListener("mouseleave", function() {
    livelyTechTee.src = "images/kids/shop-girls/lively-tech-tee.jpg";
}), livelyTechTee.addEventListener("click", function() {
        window.location = "order-html/kids-girls/girls-lively.html";
    });

spriteTight.addEventListener("mouseenter", function() {
    spriteTight.style.cursor = "pointer";
    spriteTight.src = "images/kids/shop-girls/sprite-tight-hover.jpg"
}), spriteTight.addEventListener("mouseleave", function() {
    spriteTight.src = "images/kids/shop-girls/sprite-tight.jpg";
}), spriteTight.addEventListener("click", function() {
        window.location = "order-html/kids-girls/girls-spryte.html";
    });

varsityFleecePant.addEventListener("mouseenter", function() {
    varsityFleecePant.style.cursor = "pointer";
    varsityFleecePant.src = "images/kids/shop-girls/varsity-fleece-pant-hover.jpg"
}), varsityFleecePant.addEventListener("mouseleave", function() {
    varsityFleecePant.src = "images/kids/shop-girls/varsity-fleece-pant.jpg";
}), varsityFleecePant.addEventListener("click", function() {
        window.location = "order-html/kids-girls/girls-varcity.html";
    });





