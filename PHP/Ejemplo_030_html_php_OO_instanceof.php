<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class Fruta {
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
      }

      $manzana = new Fruta();
      var_dump($manzana instanceof Fruta);
    ?>
 
  </body>
</html>
