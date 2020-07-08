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
          echo "<br>";
          // Llamamos a la funcion protected desde dentro de la clase derivada 
          $this -> introduccion();
        }
      }

      $manzana = new manzana("Manzana", "rojo");  
      $manzana->mensaje();
    ?>
   
  </body>
</html>