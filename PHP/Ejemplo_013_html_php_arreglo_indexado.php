<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Arreglos en PHP Web con HTML</h1>
    
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
