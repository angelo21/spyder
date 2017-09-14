

/****************************hover effect bottom pics****************/
/********************************************************************/
(function() {
    var hover = document.querySelectorAll(".one-third");
    var para = document.querySelectorAll(".bottom-pic-labels a")

    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseenter", function() {
            para[i].style.color = "#39CCCC"; 
        });

        hover[i].addEventListener("mouseleave", function() {
            para[i].style.color = "white";
        })
    }
})();

/*******************indicate what page is active**********************/
/*********************************************************************/
(function() {
    var title = document.querySelector("title");
    var change = title.textContent;


    switch(change) {
        case "Home":
            document.querySelector(".indicator-home").style.color = "#E93C2D";
            break;
        case "Mens":
            document.querySelector(".indicator-mens").style.color = "#E93C2D";
            break;
        case "Womens":
            document.querySelector(".indicator-womens").style.color = "#E93C2D";
            break;
        case "Kids":
            document.querySelector(".indicator-kids").style.color = "#E93C2D";
            break;
        default:
            header.style.color = "white";
            break;
    }
})();





























