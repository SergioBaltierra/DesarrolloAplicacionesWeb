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

        function __construct($nombre) 
        {
          $this->nombre = $nombre; 
        }
        function __destruct() 
        {
          echo "La Fruta es {$this->nombre}."; 
        }
      }

      $manzana = new Fruta("Manzana");
    ?>
   
  </body>
</html>