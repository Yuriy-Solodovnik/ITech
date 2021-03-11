<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="index.css">
  <title>PDO</title>
</head>
<body>
<div id="flexBox">
    <form action="./getCheifByName.php" method="post">
        <p class = "block"><b>The number of subordinates of each cheif</b></p>
        <input type="text" placeholder = "Name cheif" class = "block" name = "cheifName">
        <br>
        <input type="submit" value="Enter" class = "block">
    </form>
    <form action="./getTimeForPoject.php" method="post">
        <p class = "block"><b>Total time spent on the selected project</b></p>
        <input type="text" placeholder = "Name project" class = "block" name = "projectName">
        <br>
        <input type="submit" value="Enter" class = "block">
    </form>
    <form action="./getDescriptionForProject.php" method="post">
        <p class = "block"><b>Information on complited tasks fo the specified project on the select date</b></p>
        <input type="text" placeholder = "Name project" class = "block" name = "projectName">
        <br>
        <input type="text" placeholder = "Date" class = "block" name = "currentDate">
        <br>
        <input type="submit" value="Enter" class = "block">
    </form>
</div>
<br>
</body>
</html>