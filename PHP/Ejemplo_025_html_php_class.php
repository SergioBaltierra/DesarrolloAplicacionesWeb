<!DOCTYPE html>
<html>
 <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>
    <h1>Clase</h1>

    <?php
    class Fruta 
    {
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
    ?>
  </body>
</html>
