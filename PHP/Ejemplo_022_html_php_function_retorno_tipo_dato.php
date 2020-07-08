<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Function retorno con tipo de dato</h1>
    
    <?php
      
      function addNumbers(float $a, float $b) : float 
      {
        return $a + $b;
      }
      
      echo addNumbers(1.2, 5.2); 
    ?>
  </body>
</html>
