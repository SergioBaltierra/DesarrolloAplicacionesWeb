<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class Fruta 
      {
        public $nombre;
        public $color;

        function __construct($nombre, $color) 
        {
          $this->nombre = $nombre; 
          $this->color = $color; 
        }
        function get_nombre()
        {
          return $this->nombre;
        }
        function get_color() 
        {
          return $this->color;
        }
      }

      $manzana = new Fruta("Manzana", "Rojo");
      echo $manzana->get_nombre();
      echo "<br>";
      echo $manzana->get_color();
    ?>
   
  </body>
</html>
