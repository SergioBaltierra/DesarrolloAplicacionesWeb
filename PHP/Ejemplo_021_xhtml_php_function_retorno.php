<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con XHTML</title>
  </head>
    
  <body>
    <h1>Function con retorno</h1>
    
    <?php
      function sum(int $x, int $y) 
      {
        $z = $x + $y;
        return $z;
      }

      echo "5 + 10 = " . sum(5,10) . "<br>";
      echo "7 + 13 = " . sum(7,13) . "<br>";
      echo "2 + 4 = " . sum(2,4);
    ?>
  </body>

</html>