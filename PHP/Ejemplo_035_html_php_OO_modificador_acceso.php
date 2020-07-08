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
        protected $color;
        private $peso;
        
        function __construct($nombre)
        {
            $this->nombre = $nombre;
            $this->color = 'Amarillo';
            $this->peso = '300';
            
            $this->get_parametros();
        }
        
        private function get_parametros()
        {
            echo $this->nombre;
            echo "<br>";
            echo $this->color;
            echo "<br>";
            echo $this->peso;
        }
      }
      
      $mango = new Fruta('Mango');
    ?>
   
  </body>
</html>
