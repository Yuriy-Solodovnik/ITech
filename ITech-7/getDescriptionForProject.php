<?php
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");
$dsn = "mysql:host=localhost;dbname=ITech-5";
$user = "root";
$pass ="";
try
{
    $dbh = new PDO($dsn,$user,$pass);
    $sqlCommand ="SELECT Work.description FROM Work INNER JOIN Projects 
    ON Projects.id_projects = Work.fid_proects 
    WHERE Projects.name = '$_POST[projectNameD]' 
    AND Work.date = '$_POST[currentDate]';";
    $sth = $dbh->query($sqlCommand);
    $description = $sth->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($description);
    #foreach($dbh->query($sqlCommand) as $row)
    #{
      #  echo"<tr><td>$row[0]</td></tr>";
    #}
}
catch (PDOException $ex)
{
    echo $ex->GetMessage();
}
$dbh = null;
?>