<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Constante en PHP Web con HTML</h1>
    
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
