<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>

<body>
  <?php
  $carMileage = "$_POST[carMileage]";

  require './vendor/autoload.php';
  $cars  = (new MongoDB\Client)->carSharing->cars;
  $carsByMileage = $cars->find(['carMileage' =>['$lt' => (int)$carMileage]]);
  echo "<h3>Список автомобилей с пробегом меньше $carMileage км</h3>";
  ?>

  <div id="content_wrapper">
  <select name='allCars' multiple>
    <?php
    foreach ($carsByMileage as $carByMileage) {
        echo "<option>$carByMileage[mark] - $carByMileage[carMileage] км</option>";
    }
    ?>
  </div>
</body>
</html>