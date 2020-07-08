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
      }

      // Llamamos metodo estatico
      Saludo::bienvenido();
    ?>
   
  </body>
</html>
