<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class adios 
      {
        const MENSAJE = "¡Gracias por preferir mis clases!";
        public function chao() 
        {
          echo self::MENSAJE;
        }
      }

      $adios = new adios();
      $adios->chao();
    ?>

  </body>
</html>
