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
        function set_color($color) 
        {
          $this->color = $color;
        }
        function get_color() 
        {
          return $this->color;
        }
      }

      $manzana = new Fruta();
      $manzana->set_nombre('Manzana');
      $manzana->set_color('Rojo');
      echo "Nombre: " . $manzana->get_nombre();
      echo "<br>";
      echo "Color: " .  $manzana->get_color();
    ?>
  </body>
</html>
