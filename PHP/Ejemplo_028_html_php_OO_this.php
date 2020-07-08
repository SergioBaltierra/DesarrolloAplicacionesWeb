<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>
    <h1>Clase y Objeto</h1>
    <?php
      class Fruta 
      {
        public $nombre;
    
        function set_nombre($nombre) 
        {
          $this->nombre = $nombre;
        }
      }

      $manzana = new Fruta();
      $manzana->set_nombre("Manzana");
    ?>
  </body>
</html>
