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
        public static $valor = 3.14159;
      }

      // Obtener valor de parametro static
      echo Pi::$valor;
    ?>
   
  </body>
</html>
