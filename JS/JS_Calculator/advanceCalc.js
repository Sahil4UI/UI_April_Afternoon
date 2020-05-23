window.addEventListener("load",function ()
{
    // numbers = document.getElementsByClassName("num");
    numbers = document.querySelectorAll(".num");
    operators = document.querySelectorAll(".opr");
    document.querySelector(".result").addEventListener("click",Evaluate);
    document.querySelector("#clear").addEventListener("click",clear);
    for (i=0;i < numbers.length;i++)
    {
        numbers[i].addEventListener("click",appendNumbers);
    }
    for (i=0;i < operators.length;i++)
    {
        operators[i].addEventListener("click",appendOperators);
    }

}
);

var n1 = "";
var OperatorFlag = false;

function appendNumbers(){
   num =  event.srcElement.innerText;
   n1 += num;
   document.getElementById("box").value = n1;
   OperatorFlag =false;
}

function appendOperators(){

    opr =  event.srcElement.innerText;
    if (!OperatorFlag)
    {
        n1 += opr;
        OperatorFlag= true;
    }
    else{
        n1 = n1.slice(0,n1.length-1);
        n1 +=opr;
    }

    document.getElementById("box").value = n1;
 }
 
 function Evaluate()
 {
    document.getElementById("box").value  = eval(document.getElementById("box").value);
      
 }

function clear()
{
    document.getElementById("box").value = 0;
}