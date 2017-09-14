var trainingPant = document.querySelector("#training-pant");
var softShellTrainingShort = document.querySelector("#soft-shell-training-short");

trainingPant.addEventListener("mouseenter", function() {
    trainingPant.style.cursor = "pointer";
    trainingPant.src = "images/mens/mens-bottoms/training-pant-hover.jpg";
}),trainingPant.addEventListener("mouseleave", function() {
    trainingPant.src = "images/mens/mens-bottoms/training-pant.jpg";
}), trainingPant.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-bottoms-training-pant.html";
    });


softShellTrainingShort.addEventListener("mouseenter", function() {
    softShellTrainingShort.style.cursor = "pointer";
}), softShellTrainingShort.addEventListener("click", function() {
        window.location = "order-html/mens-header-dropdown/mens-bottoms-training-short.html";
    });