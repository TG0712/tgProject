let main_left_top = document.getElementById("main_left_top");
let main_left_bottom = document.getElementById("main_left_bottom");

let left_top_box = document.getElementById("left_top_box");
let left_bottom_box = document.getElementById("left_bottom_box");


function Sec2RightClickA()
    {

    slide_left = 0 ;
    left_top_box.style.transition = "1s" ;
    left_top_box.style.left = slide_left + "%" ;
    }

let slide_left = 0;

function SlideAuto()
    {
    Timer_Slide = setInterval( function()
        {
        if (slide_left == 0)
            {
            slide_left = slide_left - 25;
            left_top_box.style.transition = "1s" ;
            left_top_box.style.left = slide_left + "%" ;
            }

        else if (slide_left == -25)
            {
            slide_left = slide_left - 25 ;
            left_top_box.style.transition = "1s" ;
            left_top_box.style.left = slide_left + "%" ;
            }

        else if (slide_left == -50)
            {
            slide_left = slide_left - 25 ;
            left_top_box.style.transition = "1s" ;
            left_top_box.style.left = slide_left + "%" ;
            }

        else if (slide_left == -75)
            {
            left_top_box.transition = "1s" ;
            left_top_box.left = slide_left + "%" ;

            left_top_box.style.transition = "0s" ;
            left_top_box.style.left = "0%" ;
            slide_left = 0 ;

            setTimeout(Sec2RightClickA, 1) ;
            }

        }, 2000) ;
    }



function Sec2RightClickB()
    {

    slide_left_B = 0 ;
    left_bottom_box.style.transition = "1s" ;
    left_bottom_box.style.left = slide_left + "%" ;
    }

let slide_left_B = 0;


function SlideAutoB()
    {
    Timer_Slide = setInterval( function()
        {
        if (slide_left_B == 0)
            {
            slide_left_B = slide_left_B - 25 ;
            left_bottom_box.style.transition = "1s" ;
            left_bottom_box.style.left = slide_left_B + "%" ;
            }

        else if (slide_left_B == -25)
            {
            slide_left_B = slide_left_B - 25 ;
            left_bottom_box.style.transition = "1s" ;
            left_bottom_box.style.left = slide_left_B + "%" ;
            }

        else if (slide_left_B == -50)
            {
            slide_left_B = slide_left_B - 25 ;
            left_bottom_box.style.transition = "1s" ;
            left_bottom_box.style.left = slide_left_B + "%" ;
            }

        else if (slide_left_B == -75)
            {
            left_bottom_box.transition = "1s" ;
            left_bottom_box.left = slide_left_B + "%" ;

            left_bottom_box.style.transition = "0s" ;
            left_bottom_box.style.left = "0%" ;
            slide_left_B = 0 ;

            setTimeout(Sec2RightClickB, 1) ;
            }
        }, 2000) ;
    }



let MoveTop = 0;



function move() {
    moveSlide = setInterval(function(){

        if (MoveTop == 0) {
            MoveTop = -50;

            main_left_top.style.transition = "1s";
            main_left_top.style.top = "-100%";

            main_left_bottom.style.transition = "1s";
            main_left_bottom.style.top = "0%";

        }



        else if (MoveTop == -50) {

            main_left_top.style.transition = "1s";
            main_left_top.style.top = "0%";


            main_left_bottom.style.transition = "1s";
            main_left_bottom.style.top =  "100%";


            MoveTop = 0;
        }
    }, 1000);
}

move();
SlideAuto();
SlideAutoB();

