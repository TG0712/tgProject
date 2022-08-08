let contents_container = document.getElementById("contents_container");

function categoryOver(obj) {
    contents_container.style.transition = "1s";
    contents_container.style.top = "5.1%";

    obj.style.fontSize = "18px";
    obj.style.fontWeight = "600";
    }

function categoryOut(obj) {
    contents_container.style.transition = "1s";
    contents_container.style.top = "-44.3%";

    obj.style.fontSize = "18px";
    obj.style.fontWeight = "300";
    }


let blur = document.getElementById("blur");
let blur_text = document.getElementById("blur_text");
let blur2 = document.getElementById("blur2");
let blur_text2 = document.getElementById("blur_text2");


function blurOver() {
    blur.style.opacity = "0.6";
    blur_text.style.display = "block";
    }

function blurOut() {
    blur.style.opacity = "0";
    blur_text.style.display = "none";
    }

function blurOver2() {
    blur2.style.opacity = "0.6";
    blur_text2.style.display = "block";
    }

function blurOut2() {
    blur2.style.opacity = "0";
    blur_text2.style.display = "none";
    }
