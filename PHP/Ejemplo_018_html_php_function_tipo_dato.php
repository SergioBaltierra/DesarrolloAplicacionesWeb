<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Function con tipo de dato en PHP Web con HTML</h1>
    
    <?php
      function sumaNumeros(int $a, int $b) 
      {
        return $a + $b;
      }
      
      echo sumaNumeros(5, "5 dias");
      echo "<br>";
    ?>
  </body>
</html>
