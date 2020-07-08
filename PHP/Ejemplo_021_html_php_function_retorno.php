<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
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
