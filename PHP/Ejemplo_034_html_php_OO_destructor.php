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
        // Properties
        var $nombre;
        var $color;

        // Methods
        function __construct($nombre, $color) 
        {
          $this->nombre = $nombre;
          $this->color = $color; 
        }
        function __destruct() 
        {
          echo "La Fruta es {$this->nombre} y el color es {$this->color}."; 
        }
      }

      $manzana = new Fruta("Manzana", "Rojo");
    ?>
   
  </body>
</html>
