<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

    <?php
      abstract class ClasePadre 
      {
        // Metodo abstracto con parametros
        abstract protected function prefijoNombre($nombre);
      }

      class ClaseHija extends ClasePadre 
      {
        public function prefijoNombre($nombre) 
        {
          if ($nombre == "Alam Brito") 
          {
            $prefijo = "Sr.";
          } 
          elseif ($nombre == "Susana Horia") 
          {
            $prefijo = "Sra. o Srta.";
          } 
          else 
          {
            $prefijo = "";
          }
          return "{$prefijo} {$nombre}";
        }
      }

      $class = new ClaseHija;
      echo $class->prefijoNombre("Alam Brito");
      echo "<br>"; 
      echo $class->prefijoNombre("Susana Horia");
    ?>
   
  </body>
</html>
