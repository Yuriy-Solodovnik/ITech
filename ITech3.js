let wAltB, h;
const picture1 = "https://itproger.com/img/courses/1476977754.jpg";
const picture2 = "https://media.bitdegree.org/storage/media/images/2018/12/node-js-interview-questions-logo-2-266x300.png";
const picture3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
$("#imageSelector").change("onChange",()=>{
    let selector = document.getElementById("imageSelector").selectedIndex;
        switch(selector) 
        {
            case 0:
            $("#myImage").attr("src", picture1).css("width", 500).css("height", 500).css("border-width", 0 + "px"); 
            break;
            case 1:
            $("#myImage").attr("src", picture2).css("width", 500).css("height", 500).css("border-width", 0 + "px");
            break;
            case 2:
            $("#myImage").attr("src", picture3).css("width", 500).css("height", 500).css("border-width", 0 + "px"); 
            break;
        }
    });
$("#parametersSelector").change("onChange",()=>{if (document.getElementById("parametersSelector").selectedIndex > 0)
$("#height").css("visibility","hidden");
else
$("#height").css("visibility", "visible");
});
$("#confirm").on("click",()=>{
switch(document.getElementById("parametersSelector").selectedIndex) 
{
    case 0:
        wAltB = $("#widthAltBorder").val();
        h = $("#height").val();
        if(validate(wAltB)&&validate(h))
        {
            parse(wAltB);
            parse(h);
            changeSize (wAltB, h);
        }
    break;
  
    case 1:
        wAltB = $("#widthAltBorder").val();
        if(validate(wAltB))
        {
            parse(wAltB);
            changeBorder(wAltB);
        }
    break;
  
    case 2:
        wAltB = $("#widthAltBorder").val();
        if(validate(wAltB))
            changeAlt(wAltB);
    break;   
  }
  $("#widthAltBorder").val('');
  $("#height").val('');
});
function changeAlt (alter)
{
    $("#myImage").attr("alt", alter);
}
function changeSize (w,h)
{
    $("#myImage").css("width", w + "px").css("height", h + "px");
}
function changeBorder(b)
{
    $("#myImage").css("border-width", b + "px");
}
function validate(v)
{
    if(v==='')
    {
    alert("Неверно введенные данные");
    return false;
    }
    else
    return true;
}
function parse(v)
{
    if(!Number.isSafeInteger(parseInt(v)))
    {
        alert(`Невозможно получить значение из ${v}`);
    }
}
