
function imgUp(ID){
    let cigarette = document.getElementById(ID.id);
    cigarette.style.transition = "2s";
    cigarette.style.top = "20%";
}

function cigarTextOut(ID){
    let cigarette1 = document.getElementById(ID.id);
    cigarette1.style.transition = "2s";
    cigarette1.style.top = "100%";
}

function closeUpImg(obj){
    obj.style.transition = "1s";
    obj.style.transform = "scale(1.2)";
    obj.style.border = "3px solid black";
}

function closeDownImg(obj){
    obj.style.transition = "1s";
    obj.style.transform = "scale(1)";
    obj.style.border = "0px solid black";
}

let sec1_Products = document.getElementById("sec1_Products");

let x=1
//////////////////////

//스크롤 좌표값에 따른 애니메이션 효과
window.addEventListener("scroll",dk);
function dk(){
    console.log(window.scrollY)
    if(window.scrollY >= 1500 && 2150 >= window.scrollY){
        let sec2text =  document.getElementById("sec2text");
        let sec2img1 = document.getElementById("sec2img1");
        let sec2img2 = document.getElementById("sec2img2");

        sec2text.style.transition = "1.5s";
        sec2text.style.left = "10%";
        sec2img1.style.transition = "1.5s";
        sec2img1.style.left = "10%";
        sec2img2.style.transition = "1.5s";
        sec2img2.style.right = "10%";
    }

    if(window.scrollY >= 2200 && 3050 >= window.scrollY){

        let sec3text =  document.getElementById("sec3text");
        let sec3img1 = document.getElementById("sec3img1");
        let sec3img2 = document.getElementById("sec3img2");

        sec3text.style.transition = "1.5s";
        sec3text.style.left = "10%";
        sec3img1.style.transition = "1.5s";
        sec3img1.style.top = "25%";
        sec3img2.style.transition = "1.5s";
        sec3img2.style.top = "50%";
    }

    if(window.scrollY >= 3100 && 3900 >= window.scrollY){
        let sec4text =  document.getElementById("sec4text");
        let sec4img1 = document.getElementById("sec4img1");
        let sec4img2 = document.getElementById("sec4img2");

        sec4text.style.transition = "1.5s";
        sec4text.style.left = "10%";
        sec4img1.style.transition = "1.5s";
        sec4img1.style.left = "10%";
        sec4img2.style.transition = "1.5s";
        sec4img2.style.right = "10%";
    }
    if(window.scrollY >= 4000 && 4900 >= window.scrollY){
            let sec5text =  document.getElementById("sec5text");
    let sec5img = document.getElementById("sec5img");


    sec5text.style.transition = "1.5s";
    sec5text.style.left = "10%";
    sec5img.style.transition = "1.5s";
    sec5img.style.top = "25%";
    }

}