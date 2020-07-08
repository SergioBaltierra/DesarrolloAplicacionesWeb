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
        // Propiedades
        public $nombre;
        public $color;

        // Metodos
        function set_nombre($nombre) 
        {
          $this->nombre = $nombre;
        }
        function get_nombre() 
        {
          return $this->nombre;
        }
      }

      $manzana = new Fruta();
      $banana = new Fruta();
      $manzana->set_nombre('Manzana');
      $banana->set_nombre('Banana');

      echo $manzana->get_nombre();
      echo "<br>";
      echo $banana->get_nombre();
    ?>
  </body>
</html>