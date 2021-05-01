<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>PDO</title>
</head>
<body>
<div id="flexBox">
    <div class = "item">
        <p class = "block"><b>The number of subordinates of each cheif</b></p>
        <input type="text" placeholder = "Name cheif" class = "block" name = "cheifName" id = "cheifName">
        <br>
        <input type="submit" value="Enter" class = "block" onclick = "getSubordinates()"><hr>
        <table class="myTable">
            <thead>
                <tr>
                    <th>
                        Count of Workers
                    </th>
                </tr>
            </thead>
            <tbody id = "subordinatesOfCheif">
            </tbody>
        </table>
    </div>
    <div class = "item">
        <p class = "block"><b>Total time spent on the selected project</b></p>
        <input type="text" placeholder = "Name project" class = "block" name = "projectName" id = "projectName">
        <br>
        <input type="submit" value="Enter" class = "block" onclick="getTimeForProject()"><hr>
        <table class="myTable">
            <thead>
                <tr>
                    <th>
                        Count of Days
                    </th>
                </tr>
            </thead>
            <tbody id = "timeForProject">
            </tbody>
        </table>
    </div>
    <div class = "item">
        <p class = "block"><b>Information on complited tasks fo the specified project on the select date</b></p>
        <input type="text" placeholder = "Name project" class = "block" name = "projectNameD" id = "projectNameD">
        <br>
        <input type="text" placeholder = "Date" class = "block" name = "currentDate" id = "currentDate">
        <br>
        <input type="submit" value="Enter" class = "block" onclick="getProjectDescription()"><hr>
        <table class="myTable">
            <thead>
                <tr>
                    <th>
                        Description
                    </th>
                </tr>
            </thead>
            <tbody id = "projectDescription">
            </tbody>
        </table>
    </div>
</div>
<br>
<script src="./script.js"></script>
</body>
</html>