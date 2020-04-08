var num_box=6;
var rand_Color=generateRandomColors(num_box);
var correct_Color=pickcolor();
var rgb_Span=document.getElementById("RGB");
var box=document.getElementsByClassName("box");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset_Button=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init()
{
    setupModeFuntion();
    setupSquareFuntion();

}

function setupModeFuntion()
{
    for(var i=0; i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click",function()
    {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy"?num_box=3:num_box=6;
        reset();
    });
}


}

function setupSquareFuntion()
{

    for(var i=0;i<box.length;i++)
        {
    box[i].style.background=rand_Color[i];    
    box[i].addEventListener("click",function(){
        var cliked_Color=this.style.background;
       
        if(correct_Color===cliked_Color)
        {
            changeColors(cliked_Color);
            message.textContent="Correct!";
            reset_Button.textContent="Play Again?";
            h1.style.background=cliked_Color;
        }
        else{
            
            this.style.background = "#232323";
            message.textContent="Try Again";
        }
        });

   
}

}



function reset()
{
    rand_Color=generateRandomColors(num_box);
    correct_Color=pickcolor();
    rgb_Span.textContent=correct_Color.toUpperCase();
    message.textContent="";
    reset_Button.textContent="New Colors";
    for(var i=0;i<box.length;i++)
    {
        if(rand_Color[i])
        {
            box[i].style.display="block";
            box[i].style.background=rand_Color[i];  
        }
        else
        {
            box[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
}


reset_Button.addEventListener("click",function()
{
   reset();
});

rgb_Span.textContent=correct_Color.toUpperCase();




function changeColors(color){
	//loop through all squares
	for(var i = 0; i < box.length; i++){
		//change each color to match given color
		box[i].style.background = color;
	}
}

function pickcolor()
{
    var random=Math.floor((Math.random()* rand_Color.length));
    return rand_Color[random];

}

function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor())

    }
    return arr;

}

function randomColor()
{
    //RGB
    var R=Math.floor(Math.random()*256);
    var G=Math.floor(Math.random()*256);
    var B=Math.floor(Math.random()*256);
    return "rgb("+R+", "+G+", "+B+")";
}