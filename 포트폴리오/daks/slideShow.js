
let Sec2Left = -100 ;

function Sec2LeftClick()
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;
    Sec2Left = Sec2Left + 100 ;
    if (Sec2Left > 0)
        {
        Sec2Left = Sec2Left - 100 ;

        Sec2SlideInFrame.style.transition = "0s" ;
        Sec2SlideInFrame.style.left = "-700%" ;
        Sec2Left = -700 ;

        setTimeout(Sec2LeftClickA, 1) ;

        if (Sec2Left == -700)
            {
            Sec2SSC(4) ;
            }
        }
    else if (Sec2Left >= -800)
        {
        Sec2SlideInFrame.style.transition = "0.5s" ;
        Sec2SlideInFrame.style.left = Sec2Left + "%" ;

        if (Sec2Left == 0)
            {
            Sec2SSC(5) ;
            }
        else if (Sec2Left == -500)
            {
            Sec2SSC(3) ;
            }
        else if (Sec2Left == -400)
            {
            Sec2SSC(2) ;
            }
        else if (Sec2Left == -300)
            {
            Sec2SSC(1) ;
            }
        else if (Sec2Left == -200)
            {
            Sec2SSC(0) ;
            }
        else if (Sec2Left == -100)
            {
            Sec2SSC(6) ;
            }
        }
    }

function Sec2LeftClickA()
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;
    Sec2Left = Sec2Left + 100 ;
    Sec2SlideInFrame.style.transition = "0.5s" ;
    Sec2SlideInFrame.style.left = Sec2Left + "%" ;
    }

function Sec2RightClick()
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;
    Sec2Left = Sec2Left - 100 ;
    if (Sec2Left < -700)
        {
        Sec2Left = Sec2Left + 100 ;

        Sec2SlideInFrame.style.transition = "0s" ;
        Sec2SlideInFrame.style.left = "0%" ;
        Sec2Left = 0 ;
        setTimeout(Sec2RightClickA, 1) ;

        console.log(Sec2Left) ;

        if (Sec2Left == 0)
            {
            Sec2SSC(6) ;
            }
        }
    else if (Sec2Left <= -100)
        {
        Sec2SlideInFrame.style.transition = "0.5s" ;
        Sec2SlideInFrame.style.left = Sec2Left + "%" ;

        console.log(Sec2Left) ;

        if (Sec2Left == -200)
            {
            console.log("a") ;
            Sec2SSC(0) ;
            }
        else if (Sec2Left == -300)
            {
            Sec2SSC(1) ;
            }
        else if (Sec2Left == -400)
            {
            Sec2SSC(2) ;
            }
        else if (Sec2Left == -500)
            {
            Sec2SSC(3) ;
            }
        else if (Sec2Left == -600)
            {
            Sec2SSC(4) ;
            }
        else if (Sec2Left == -700)
            {
            Sec2SSC(5) ;
            }
        }
    }

function Sec2RightClickA()
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;
    Sec2Left = Sec2Left - 100 ;
    Sec2SlideInFrame.style.transition = "0.5s" ;
    Sec2SlideInFrame.style.left = Sec2Left + "%" ;
    }

let Timer_Slide ;

function SlideAuto()
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;

    Timer_Slide = setInterval( function()
        {
        if (Sec2Left == -100)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(0) ;
            }

        else if (Sec2Left == -200)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(1) ;
            }

        else if (Sec2Left == -300)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(2) ;
            }

        else if (Sec2Left == -400)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(3) ;
            }

        else if (Sec2Left == -500)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(4) ;
            }

        else if (Sec2Left == -600)
            {
            Sec2Left = Sec2Left - 100 ;
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SSC(5) ;
            }

        else if (Sec2Left == -700)
            {
            Sec2SlideInFrame.style.transition = "0.5s" ;
            Sec2SlideInFrame.style.left = Sec2Left + "%" ;

            Sec2SlideInFrame.style.transition = "0s" ;
            Sec2SlideInFrame.style.left = "0%" ;
            Sec2Left = 0 ;
            setTimeout(Sec2RightClickA, 1) ;

            Sec2SSC(6) ;
            }
        }, 3000) ;
    }

function Sec2SSC(Number)
    {
    let SSCs = document.getElementsByClassName("SSCs") ;
    if (Number == 0)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 1)
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            }
        }
    else if (Number == 1)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 2)
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid #FF7C98" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid #FF7C98" ;
                }
            }
        }
    else if (Number == 2)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 3)
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            }
        }
    else if (Number == 3)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 4)
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid #FF7C98" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid #FF7C98" ;
                }
            }
        }
    else if (Number == 4)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 5)
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            }
        }
    else if (Number == 5)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 6)
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            }
        }
    else if (Number == 6)
        {
        for (i=0 ; i<SSCs.length ; i++)
            {
            if (i == 0)
                {
                SSCs[i].style.backgroundColor = "#FF7C98" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            else
                {
                SSCs[i].style.backgroundColor = "white" ;
                SSCs[i].style.border = "2px solid white" ;
                }
            }
        }
    }

function CCSClick(obj)
    {
    let Sec2SlideInFrame = document.getElementById("Sec2SlideInFrame") ;
    Sec2SlideInFrame.style.transition = "0.5s"
    if (obj.id == "SSC1")
        {
        Sec2SlideInFrame.style.left = "-100%"
        Sec2Left = -100 ;
        Sec2SSC(6)
        }

    else if (obj.id == "SSC2")
        {
        Sec2SlideInFrame.style.left = "-200%"
        Sec2Left = -200 ;
        Sec2SSC(0) ;
        }

    else if (obj.id == "SSC3")
        {
        Sec2SlideInFrame.style.left = "-300%"
        Sec2Left = -300 ;
        Sec2SSC(1) ;
        }

    else if (obj.id == "SSC4")
        {
        Sec2SlideInFrame.style.left = "-400%"
        Sec2Left = -400 ;
        Sec2SSC(2) ;
        }

    else if (obj.id == "SSC5")
        {
        Sec2SlideInFrame.style.left = "-500%"
        Sec2Left = -500 ;
        Sec2SSC(3) ;
        }

    else if (obj.id == "SSC6")
        {
        Sec2SlideInFrame.style.left = "-600%"
        Sec2Left = -600 ;
        Sec2SSC(4) ;
        }

    else if (obj.id == "SSC7")
        {
        Sec2SlideInFrame.style.left = "-700%"
        Sec2Left = -700 ;
        Sec2SSC(5) ;
        }
    }