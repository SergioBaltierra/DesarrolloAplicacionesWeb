<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con HTML</title>
  </head>
    
  <body>
    <h1>Constante en PHP Web con XHTML</h1>
    
    <?php

      $a = "Sin ";
      echo "\$a = ", $a, "<br>";
      echo "\$b = \$a . \"preocupaciones \"<br>";
      
      // Concatenamos $a con "preocupaciones".
      $b = $a . "preocupaciones ";
      echo "Ahora \$b = ", $b, "<br>";
      echo "\$b .= \"en absoluto.\"<br>";
      
      // Concatenamos $b con "en absoluto".
      $b .= "en absoluto.";
      echo "Ahora \$b = ", $b, "<br>";
     
    ?> 
  </body>

</html>