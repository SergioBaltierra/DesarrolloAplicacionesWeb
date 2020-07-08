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
      function get_nombre() 
      {
        return $this->nombre;
      }
    }

    $manzana = new Fruta("Manzana");
    echo $manzana->get_nombre();
  ?>
 
  </body>
</html>
