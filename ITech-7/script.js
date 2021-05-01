let xhr = new XMLHttpRequest();

function getSubordinates(){
    xhr.onload = function (){
        if(xhr.status === 200)
        {
            document.getElementById("subordinatesOfCheif").innerHTML=xhr.response;
        }
    };
    let cheifName = document.getElementById("cheifName").value;
    xhr.open("POST", "./getCheifByName.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("cheifName="+cheifName);
}

function getTimeForProject(){
    xhr.onload = function(){
        if(xhr.status === 200)
        {
            let rows = xhr.responseXML.children;
            let timeForProject = "<tr><td>" + rows[0]?.children[0]?.firstChild?.nodeValue + "</td></tr>";
            document.getElementById("timeForProject").innerHTML=timeForProject;
        }
    };
    let projectName = document.getElementById("projectName").value;
    xhr.open("POST", "./getTimeForPoject.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("projectName="+projectName);
}

async function getProjectDescription(){
    let projectNameD = document.getElementById("projectNameD").value;
    let currentDate = document.getElementById("currentDate").value;
    let response = await fetch("./getDescriptionForProject.php", 
        {method:"POST", headers:{"Content-type":"application/x-www-form-urlencoded"}, 
        body:`projectNameD=${projectNameD}&currentDate=${currentDate}`});
    let json = await response.json();
    document.getElementById("projectDescription").innerHTML="<tr><td>" +json[0]?.description+ "</td></tr>";
}