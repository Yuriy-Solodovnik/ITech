<?php
function createConnection()
{
    $dsn = "mysql:host=localhost;dbname=ITech-5";
    $user = "root";
    $pass ="";
    try
    {
        return new PDO($dsn,$user,$pass);
    catch (PDOException $ex)
    {
        echo $ex->GetMessage();
    }
}
?>