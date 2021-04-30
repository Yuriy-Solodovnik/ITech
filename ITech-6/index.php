<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./assets/index.css">
  <title>Document</title>
</head>
<body>
<?php
    require_once __DIR__ . "/vendor/autoload.php";
    $db = (new MongoDB\Client)->carSharing;
    $cars=$db->cars->find();
?>
<h3>Список предоставляемых автомобилей</h3>
<select name ='allCars' multiple>
<?php
        foreach ($cars as $car) 
        {
            echo "<option value=\"$car[mark]\">$car[mark] с пробегом $car[carMileage]км. $car[year] года выпуска</option>";
        }
?>
</select>
<form action="./income.php" method="post" class="incomeToDate">
    <h3>Рассчитать доход на определенную дату</h3>
    <input type = "date" name = "chosenDate" id = "chosenDate" oninput="localStorage.setItem('chosenDate', carMileage.value)">
    <input type="submit" value="Получить" onclick = "localStorage.removeItem('chosenDate', carMileage.value)">
</form>
<form action="./carByMileage.php" method="post" class="carByMileage">
    <h3>Получить список автомобилей с пробегом меньше заданого</h3>
    <input type = "number" id = "carMileage" name = "carMileage" min="0" oninput="localStorage.setItem('carMileage', carMileage.value)">
    <input type="submit" value="Получить" onclick = "localStorage.removeItem('carMileage', carMileage.value)">
</form>
<script>
    const carMileage = document.getElementById('carMileage');
    const chosenDate = document.getElementById('chosenDate');
    carMileage.value = localStorage.getItem('carMileage');
    chosenDate.value = new Date(parseInt(localStorage.getItem('chosenDate')));
</script>
</body>
</html>