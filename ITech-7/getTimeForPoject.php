<?php
header('Content-Type: text/xml');
header("Cache-Control: no-cache, must-revalidate");
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
        echo"<?xml version='1.0' encoding='utf8' ?>";
        echo"<root>";
        
        foreach($dbh->query($sqlCommand) as $row)
            {
                echo"<row>$row[0]</row>";
            }
        echo"</root>";
    
}
catch (PDOException $ex)
{
    echo $ex->GetMessage();
}
$dbh = null;
?>