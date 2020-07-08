<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
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
