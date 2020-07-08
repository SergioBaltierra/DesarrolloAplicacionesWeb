<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Arreglos en PHP Web con HTML</h1>
    
    <?php
      $cars = array ("volvo" => "Volvo", "bmw" => "BMW", "toyota" => "Toyota");
      
      echo "Me gustan: " . $cars["volvo"] . ", " . $cars["bmw"] . " y " . $cars["toyota"] . ".";
      
      echo "<br>";
      
      $cars ["volvo"] = "Volvo";
      $cars ["bmw"] = "BMW";
      $cars ["toyota"] = "Toyota";
      
      echo "Me gustan: " . $cars["volvo"] . ", " . $cars["bmw"] . " y " . $cars["toyota"] . ".";
    ?>
  </body>
</html>
