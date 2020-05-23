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

function appendNumbers(){
   num =  event.srcElement.innerText;
   document.getElementById("box").value += num;
}

function appendOperators(){
    opr =  event.srcElement.innerText;
    document.getElementById("box").value += opr;
 }
 
 function Evaluate()
 {
    document.getElementById("box").value  = eval(document.getElementById("box").value);
      
 }

function clear()
{
    document.getElementById("box").value = 0;
}