
function dropMenuOver(ID) {
    {
    let dropContents = document.getElementById(ID.id);

    dropContents.style.transition = "1s";
    dropContents.style.height = "100%";
    }
}

function dropMenuOut(ID) {
    {
    let dropContents = document.getElementById(ID.id);

    dropContents.style.transition = "2s";
    dropContents.style.height = "0%";
    }
}

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");

let menuBar = document.getElementById("menuBar");

let slideMenu = 0;
function burgerBtn(){
    if (slideMenu == 0){
        bar1.style.transition = "2s";
        bar1.style.transform = "rotate(45deg)";
        bar1.style.top = "48.5%";

        bar2.style.transition = "2s";
        bar2.style.opacity = "0";

        bar3.style.transition = "2s";
        bar3.style.transform = "rotate(-45deg)";
        bar3.style.top = "48.5%";

        slideMenu = slideMenu + 1;

        menuBar.style.transition ="2s";
        menuBar.style.right = "0%";

    }
    else if (slideMenu == 1){
        bar1.style.transition = "2s";
        bar1.style.transform = "rotate(0deg)";
        bar1.style.top = "35.5%";

        bar2.style.transition = "2s";
        bar2.style.opacity = "1";

        bar3.style.transition = "2s";
        bar3.style.transform = "rotate(0deg)";
        bar3.style.top = "61.5%";

        menuBar.style.transition ="2s";
        menuBar.style.right = "-20%";

        slideMenu = slideMenu - 1;
    }
}