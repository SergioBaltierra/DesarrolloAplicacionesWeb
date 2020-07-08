<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class Saludo 
      {
        public static function bienvenido() 
        {
          echo "Hola Mundo";
        }
        public function __construct() 
        {
          self::bienvenido();
        }
      }

      new Saludo();
    ?>
   
  </body>
</html>
