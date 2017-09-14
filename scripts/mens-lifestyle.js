/***********************change sale images on hover*****************/
/*******************************************************************/
(function() {
    var blackHoody = document.querySelector("#black-hoody");
    var ssButtonDown = document.querySelector("#ss-button-down");
    var convertPant = document.querySelector("#convert-pant");
    var centenialPant = document.querySelector("#centenial-pant");
    var orbitShellJacket = document.querySelector("#orbit-shell-jacket");
    var alpsTechPolo = document.querySelector("#alps-tech-polo");
    
    blackHoody.addEventListener("mouseenter", function() {
        blackHoody.style.cursor = "pointer";
       blackHoody.src = "images/mens/mens-lifestyle/black-hoody-hover.jpg"; 
    }), blackHoody.addEventListener("mouseleave", function() {
        blackHoody.src = "images/mens/mens-lifestyle/black-hoody.jpg"; 
    }), blackHoody.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-manic.html";
    });
    
     ssButtonDown.addEventListener("mouseenter", function() {
        ssButtonDown.style.cursor = "pointer";
       ssButtonDown.src = "images/mens/mens-lifestyle/ss-button-down-hover.jpg"; 
    }), ssButtonDown.addEventListener("mouseleave", function() {
        ssButtonDown.src = "images/mens/mens-lifestyle/ss-button-down.jpg"; 
    }), ssButtonDown.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-crucial.html";
    });
    
    convertPant.addEventListener("mouseenter", function() {
        convertPant.style.cursor = "pointer";
       convertPant.src = "images/mens/mens-lifestyle/convert-pant-hover.jpg"; 
    }), convertPant.addEventListener("mouseleave", function() {
        convertPant.src = "images/mens/mens-lifestyle/convert-pant.jpg"; 
    }), convertPant.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-convert.html";
    });
    
     centenialPant.addEventListener("mouseenter", function() {
        centenialPant.style.cursor = "pointer";
       centenialPant.src = "images/mens/mens-lifestyle/centenial-pant-hover.jpg"; 
    }), centenialPant.addEventListener("mouseleave", function() {
       centenialPant.src = "images/mens/mens-lifestyle/centenial-pant.jpg"; 
     }),centenialPant.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-centennial.html";
    });
    
    orbitShellJacket.addEventListener("mouseenter", function() {
        orbitShellJacket.style.cursor = "pointer";
       orbitShellJacket.src = "images/mens/mens-lifestyle/orbit-shell-jacket-hover.jpg"; 
    }), orbitShellJacket.addEventListener("mouseleave", function() {
       orbitShellJacket.src = "images/mens/mens-lifestyle/orbit-shell-jacket.jpg"; 
     }), orbitShellJacket.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-orbit.html";
    });
    
    alpsTechPolo.addEventListener("mouseenter", function() {
        alpsTechPolo.style.cursor = "pointer";
       alpsTechPolo.src = "images/mens/mens-lifestyle/alps-tech-polo-hover.jpg"; 
    }), alpsTechPolo.addEventListener("mouseleave", function() {
       alpsTechPolo.src = "images/mens/mens-lifestyle/alps-tech-polo.jpg"; 
     }), alpsTechPolo.addEventListener("click", function() {
        window.location = "order-html/mens-lifestyle-order/order-mens-lifestyle-alps.html";
    });
})();




































