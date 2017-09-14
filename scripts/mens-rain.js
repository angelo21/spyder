/************change sale images on hover and click link to order****/
/********************change cursor to pointer on hover****************/
(function() {

    var blueRain = document.querySelector("#blue-rain");
    var lightGreenRain = document.querySelector("#light-green-rain");
    var rainPants = document.querySelector("#rain-pants");
    var grayRain = document.querySelector("#gray-rain");
   

            /**********mens rain hover and click**********/
            /**************change cursor to pointer on hover******/

    blueRain.addEventListener("mouseenter", function() {
        blueRain.style.cursor = "pointer";
        blueRain.src = "images/mens/mens-rain/blue-rain-hover.jpg";
    }), blueRain.addEventListener("mouseleave", function() {
        blueRain.src = "images/mens/mens-rain/blueRain.jpg";
    }), blueRain.addEventListener("click", function() {
        window.location = "order-html/mens-rain-order/order-mens-rain-anorak.html";
    });

    lightGreenRain.addEventListener("mouseenter", function() {
        lightGreenRain.style.cursor = "pointer";
        lightGreenRain.src = "images/mens/mens-rain/light-green-rain-hover.jpg";
    }), lightGreenRain.addEventListener("mouseleave", function() {
        lightGreenRain.src = "images/mens/mens-rain/light-green-rain.jpg";
    }),lightGreenRain.addEventListener("click", function() {
        window.location = "order-html/mens-rain-order/order-mens-rain-pryme.html";
    })

    rainPants.addEventListener("mouseenter", function() {
        rainPants.style.cursor = "pointer";
        rainPants.src = "images/mens/mens-rain/rain-pants-hover.jpg";

    }), rainPants.addEventListener("mouseleave", function() {
        rainPants.src = "images/mens/mens-rain/rainPants.jpg";
    }),rainPants.addEventListener("click", function() {
        window.location = "order-html/mens-rain-order/order-mens-rain-contact-shell.html";
    });

    grayRain.addEventListener("mouseenter", function() {
        grayRain.style.cursor = "pointer";
        grayRain.src = "images/mens/mens-rain/gray-rain-hover.jpg";

    }), grayRain.addEventListener("mouseleave", function() {
        grayRain.src = "images/mens/mens-rain/grayRain.jpg";
    }),grayRain.addEventListener("click", function() {
        window.location = "order-html/mens-rain-order/order-mens-rain-bayse.html";
    });
})();