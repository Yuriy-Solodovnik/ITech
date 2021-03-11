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
    $dbh = new PDO($dsn,$user,$pass);
    $sqlCommand ="SELECT DATEDIFF((SELECT Work.time_end FROM Work INNER JOIN Projects ON Projects.id_projects = Work.fid_proects
    WHERE Projects.name = '$_POST[projectName]'), 
   (SELECT Work.time_start FROM Work INNER JOIN Projects ON Projects.id_projects = Work.fid_proects
    WHERE Projects.name = '$_POST[projectName]')) AS Days";
    echo"<table><tr><th>Count of Days</th></tr>";
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