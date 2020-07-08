<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class Pi 
      {
        public static $valor=3.14159;
        
        public function valorStatic() 
        {
          return self::$valor;
        }
      }

      // Obtener valor de parametro static
      $Pi = new Pi();
      echo $Pi->valorStatic();
    ?>
   
  </body>
</html>
