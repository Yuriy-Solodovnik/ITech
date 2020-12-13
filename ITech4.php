<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab4_8</title>
    <style>
    td
    {
        background: yellow;
    }
     th
    {
        background: red; 
    }
  </style>
</head>
<body>
    <?php
    $file_hendler = fopen("books.txt", "r");
    if (!$file_hendler) 
        {
            echo("Невозможно открыть файл");
        }
    else 
        {
            $file_name = "books.txt";
            $data = file( $file_name );
            foreach( $data as $value ):
            $value = explode( ",", $value );
            endforeach;           
        }
    ?>
    <table border = "1">
    <tr>
             <th>Автор</th>
             <th>Название</th>
             <th>Страницы</th>
    </tr>
    <?php
    for ($i = 0; $i < count($value); $i+=1)
    {
    ?>
        <tr>
             <td><?php print(array_shift($value)) ?></td>
             <td><?php print(array_shift($value)) ?></td>
             <td><?php print(array_shift($value)) ?></td>
         </tr>
    <?php
    }
    ?>
    </table>
</body>
</html>