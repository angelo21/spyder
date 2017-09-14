var tresh = document.querySelector("#tresh");
var timelessDown = document.querySelector("#timeless-down");
var kidsConstantStryke = document.querySelector("#kids-constant-stryke");
var ombreVest = document.querySelector("#ombre-vest");
var flyte = document.querySelector("#flyte");
var elbert = document.querySelector("#elbert");


tresh.addEventListener("mouseenter", function() {
    tresh.style.cursor = "pointer";
    tresh.src = "images/kids/kids-jackets/tresh-hover.jpg";
}),tresh.addEventListener("mouseleave", function() {
    tresh.src = "images/kids/kids-jackets/tresh.jpg";
}), tresh.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-tresh.html";
    });

timelessDown.addEventListener("mouseenter", function() {
    timelessDown.style.cursor = "pointer";
   timelessDown.src = "images/kids/kids-jackets/timeless-down-hover.jpg";
}),timelessDown.addEventListener("mouseleave", function() {
   timelessDown.src = "images/kids/kids-jackets/timeless-down.jpg";
}), timelessDown.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-timeless.html";
    });

kidsConstantStryke.addEventListener("mouseenter", function() {
    kidsConstantStryke.style.cursor = "pointer";
   kidsConstantStryke.src = "images/kids/kids-jackets/constant-stryke-hover.jpg";
}),kidsConstantStryke.addEventListener("mouseleave", function() {
   kidsConstantStryke.src = "images/kids/kids-jackets/constant-stryke.jpg";
}), kidsConstantStryke.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-constant.html";
    });

ombreVest.addEventListener("mouseenter", function() {
    ombreVest.style.cursor = "pointer";
   ombreVest.src = "images/kids/kids-jackets/ombre-vest-hover.jpg";
}),ombreVest.addEventListener("mouseleave", function() {
   ombreVest.src = "images/kids/kids-jackets/ombre-vest.jpg";
}), ombreVest.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-ombre.html";
    });

flyte.addEventListener("mouseenter", function() {
    flyte.style.cursor = "pointer";
  flyte.src = "images/kids/kids-jackets/flyte-hover.jpg";
}),flyte.addEventListener("mouseleave", function() {
  flyte.src = "images/kids/kids-jackets/flyte.jpg";
}), flyte.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-flyte.html";
    });

elbert.addEventListener("mouseenter", function() {
    elbert.style.cursor = "pointer";
  elbert.src = "images/kids/kids-jackets/elbert-hover.jpg";
}),elbert.addEventListener("mouseleave", function() {
  elbert.src = "images/kids/kids-jackets/elbert.jpg";
}), elbert.addEventListener("click", function() {
        window.location = "order-html/kids-header-dropdown/kids-jackets-elbert.html";
    });
































