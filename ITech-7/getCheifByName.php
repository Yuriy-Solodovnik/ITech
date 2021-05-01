<?php
$dsn = "mysql:host=localhost;dbname=ITech-5";
$user = "root";
$pass ="";
try
{
    $dbh = new PDO($dsn,$user,$pass);
    $sqlCommand ="SELECT COUNT(Worker.id_worker) FROM Worker INNER JOIN Department ON Department.id_department = Worker.fid_department 
    WHERE Department.cheif = '$_POST[cheifName]'";
    foreach($dbh->query($sqlCommand) as $row)
    {
        echo"<tr><td>$row[0]</td></tr>";
    }
}
catch (PDOException $ex)
{
    echo $ex->GetMessage();
}
$dbh = null;
?>