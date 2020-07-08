<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con XHTML</title>
  </head>
    
  <body>
    <h1>Arreglo bidimensional</h1>
    
    <?php
      $cars = array (
        array("Volvo",22,18),
        array("BMW",15,13),
        array("Saab",5,2),
        array("Land Rover",17,15)
      );
        
      echo $cars[0][0].": En stock: ".$cars[0][1].", vendidos: ".$cars[0][2].".<br>";
      echo $cars[1][0].": En stock: ".$cars[1][1].", vendidos: ".$cars[1][2].".<br>";
      echo $cars[2][0].": En stock: ".$cars[2][1].", vendidos: ".$cars[2][2].".<br>";
      echo $cars[3][0].": En stock: ".$cars[3][1].", vendidos: ".$cars[3][2].".<br>";
    ?>
  </body>

</html>