<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="index.css">
  <title>Query Result</title>
</head>

<body>
<?php
$dsn = "mysql:host=localhost;dbname=ITech-5";
$user = "root";
$pass ="";
try
{
    $dbh = new PDO($dsn,$user,$pass);$sqlCommand ="SELECT Work.description FROM Work INNER JOIN Projects 
    ON Projects.id_projects = Work.fid_proects 
    WHERE Projects.name = '$_POST[projectName]' 
    AND Work.date = '$_POST[currentDate]';";
    echo"<table><tr><th>Description</th></tr>";
    foreach($dbh->query($sqlCommand) as $row)
    {
        echo"<tr><td>$row[0]</td></tr>";
    }
    echo "</table>";
}
catch (PDOException $ex)
{
    echo $ex->GetMessage();
}
$dbh = null;
?>
</body>
</html>