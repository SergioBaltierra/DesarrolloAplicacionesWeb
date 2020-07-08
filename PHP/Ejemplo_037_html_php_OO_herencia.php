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

        protected function introduccion() 
        {
          echo "La Fruta es {$this->nombre} y el color es {$this->color}."; 
        }
      }

      class manzana extends Fruta 
      {
        public function mensaje() 
        {
          echo "¿Soy una fruta o una baya? "; 
        }
      }

      $manzana = new manzana("Manzana", "rojo");  // OK. __construct() is public
      $manzana->mensaje(); // OK. mensaje() is public
      echo "<br>";
      $manzana->introduccion(); // ERROR. introduccion() is protected
    ?>
  </body>
</html>