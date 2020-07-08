<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con XHTML</title>
  </head>
    
  <body>
    <h1>Arreglos en PHP Web con XHTML</h1>
    
    <?php
      $cars = array("Volvo", "BMW", "Toyota");
      
      echo "Me gustan: " . $cars[0] . ", " . $cars[1] . " y " . $cars[2] . ".";

      echo "<br>";
      
      $cars [0] = "Volvo";
      $cars [1] = "BMW";
      $cars [2] = "Toyota";
      
      echo "Me gustan: " . $cars[0] . ", " . $cars[1] . " y " . $cars[2] . ".";
    ?> 
  </body>

</html>