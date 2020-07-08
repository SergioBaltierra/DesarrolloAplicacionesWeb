<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Foreach en PHP Web con HTML</h1>
    
    <?php
      $cars = array("Volvo", "BMW", "Toyota");

      foreach ($cars as $value) 
      {
        echo "$value <br>";
      }
    ?> 
  </body>
</html>
