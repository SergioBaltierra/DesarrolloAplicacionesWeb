<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con XHTML</title>
  </head>
    
  <body>
    <h1>Function con tipo de dato estricto</h1>
    
    <?php declare(strict_types=1); 
      function sumaNumeros(int $a, int $b) 
      {
        return $a + $b;
      }
      
      echo sumaNumeros(5, "5 dias");
      echo "<br>";
    ?>
  </body>

</html>