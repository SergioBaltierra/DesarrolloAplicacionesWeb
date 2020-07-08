<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      class pi 
      {
        public static $value=3.14159;
      }

      class x extends pi 
      {
        public function xStatic() 
        {
          return parent::$value;
        } 
      }

      // Obtener valor de paramatro static directamente desde la clase hija
      echo x::$value;
      echo "<br>";


      // Obtener valor de parametro static desde el metodo xStatic
      $x = new x();
      echo $x->xStatic();
    ?>
   
  </body>
</html>
