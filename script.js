var b=document.querySelector("button");

var flag=false;

// b.addEventListener("click",function()
//                    {
//                        if(flag)
//                        {
//                         document.body.style.backgroundColor="white";
                        
//                        }
//                        else
//                        {
//                         document.body.style.backgroundColor="red";
                        
//                        }
//                        flag=!flag;
// });

b.addEventListener("click",function()
                   {
                       document.body.classList.toggle("red");
                   });
