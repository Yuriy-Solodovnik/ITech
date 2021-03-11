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
    $sqlCommand ="SELECT COUNT(Worker.id_worker) FROM Worker INNER JOIN Department ON Department.id_department = Worker.fid_department 
    WHERE Department.cheif = '$_POST[cheifName]'";
    echo"<table><tr><th>Count of Workers</th></tr>";
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