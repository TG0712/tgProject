function Sec2RightClickA()
    {
    let best_slide = document.getElementById("best_slide") ;
    best_slide_top = 0 ;
    best_slide.style.transition = "1s" ;
    best_slide.style.top = best_slide + "%" ;
    }

let best_slide_top = 0;

function SlideAuto()
    {
    let best_slide = document.getElementById("best_slide") ;

    Timer_Slide = setInterval( function()
        {
        if (best_slide_top == 0)
            {
            best_slide_top = best_slide_top - 50 ;
            best_slide.style.transition = "1s" ;
            best_slide.style.top = best_slide_top + "%" ;

            //Sec2SSC(0) ;
            }

        else if (best_slide_top == -50)
            {
            best_slide_top = best_slide_top - 50 ;
            best_slide.style.transition = "1s" ;
            best_slide.style.top = best_slide_top + "%" ;

            //Sec2SSC(1) ;
            }

        else if (best_slide_top == -100)
            {
            best_slide_top = best_slide_top - 50 ;
            best_slide.style.transition = "1s" ;
            best_slide.style.top = best_slide_top + "%" ;

            //Sec2SSC(2) ;
            }

        else if (best_slide_top == -150)
            {
            best_slide.style.transition = "1s" ;
            best_slide.style.top = best_slide_top + "%" ;

            best_slide.style.transition = "0s" ;
            best_slide.style.top = "0%" ;
            best_slide_top = 0 ;

            setTimeout(Sec2RightClickA, 1) ;

            //Sec2SSC(6) ;
            }
        }, 3000) ;
    }

    SlideAuto();