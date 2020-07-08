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

      class manzana extends Fruta
      {
        public $peso;
        
        public function __construct($nombre, $color, $peso) 
        {
          $this->nombre = $nombre;
          $this->color = $color;
          $this->peso = $peso; 
        }
        
        public function introduccion() 
        {
          echo "La Fruta es {$this->nombre}, el color es {$this->color}, y el peso es {$this->peso} grs."; 
        }
      }

      $manzana = new manzana("Manzana", "rojo", 50);
      $manzana->introduccion();
    ?>
  </body>
</html>