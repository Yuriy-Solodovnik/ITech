<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./assets/index.css">
  <title>Document</title>
</head>

<body>
  <?php
  $chosenDate = "$_POST[chosenDate]";
  require './vendor/autoload.php';
  $services  = (new MongoDB\Client)->carSharing->services;
  $chosenDate = strtotime($chosenDate);
  $d = new MongoDB\BSON\UTCDateTime($chosenDate * 1000);
  $servicesOnDate = $services->find(['dateEnd' => ['$lt' => $d]]);
  echo "<h3>Прибыль на $_POST[chosenDate]</h3>";
  ?>
  <select name='income' multiple>
    <?php
    $sum = 0;
            foreach ($servicesOnDate as $service) 
            {
                $datetimeStart = getMyDate($service['dateStart']);
                $datetimeEnd = getMyDate($service['dateEnd']);
                $diff = (int)$datetimeEnd - (int)$datetimeStart;
                $income = $diff*$service['cost'];
                $sum += $income;
                echo "<option>$service[mark] орендван на $diff д. Начиная с $datetimeStart за $service[cost]/день. Доход: $income у.е.</<option>";
            }
          echo "</select><p>Сумарный доход на $_POST[chosenDate]: $sum у.е.</p>";
function getMyDate($time)
{
    $date = $time->toDateTime()->format('d.m.Y');
    return $date;
}
?>
</body>
</html>