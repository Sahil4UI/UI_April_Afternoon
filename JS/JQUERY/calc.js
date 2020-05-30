// window.addEventListener('load',function()
// {

// });

$(document).ready(
    function()
    {
        $("button").click(
            function()
            {
                  var  num1 = $("#box1").val();
                  var num2 = $("#box2").val();
                  var opr = $(this).html();

                  var result = eval(num1+opr+num2);
                  $("#result").html(result);
            }
        );
    }
);