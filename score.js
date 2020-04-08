var p1=document.querySelector("#p1");
var p1disp=document.getElementById("player1");
var p2disp=document.getElementById("player2");
var Resetbutton=document.querySelector("#reset");
var mxDisp=document.querySelector("#max");
var numinput=document.querySelector("input[type='number']");
p1score=0;
p2score=0;
max=5;
gameover=false;

p1.addEventListener("click",function()
{
    console.log(p1score+","+max);
    if(!gameover)
    {
        p1score++;
        if(p1score===max)
        {
            gameover=true;
            p1disp.classList.add("winner");
        }

    }
   
    p1disp.innerHTML= p1score ;

});

document.querySelector("#p2").addEventListener("click",function()
{
    if(!gameover)
    {
        p2score++;
        if(p2score===max)
        {
            gameover=true;
            p2disp.classList.add("winner");

        }

    }
    p2disp.innerHTML=p2score;
});

numinput.addEventListener("change",function()
{
    reset();
    max=Number(numinput.value);   
    mxDisp.innerHTML=max;
});

Resetbutton.addEventListener("click",function()
{
    reset();
    
});

function reset()
{
    p1score=0;
    p2score=0;
    p1disp.innerHTML=p1score;
    p2disp.innerHTML=p2score;
    gameover=false;
    p1disp.classList.remove("winner");
    p2disp.classList.remove("winner");

}