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

        public function __construct($nombre, $color) 
        {
          $this->nombre = $nombre;
          $this->color = $color; 
        }

        public function introduccion() 
        {
          echo "La Fruta es {$this->nombre} y el color es {$this->color}."; 
        }
      }

      class manzana extends Fruta // manzana es una herencia desde Fruta
      {
        public function mensaje() 
        {
          echo "¿Soy una fruta?"; 
        }
      }

      $manzana = new manzana("Manzana", "rojo");
      $manzana->mensaje();
      echo "<br>";
      $manzana->introduccion();
    ?>
  </body>
</html>