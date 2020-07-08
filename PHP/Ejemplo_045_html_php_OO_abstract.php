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
        // La clase secundaria puede definir argumentos opcionales que no están en el método abstracto del padre
        public function prefijoNombre($nombre, $separator = ".", $saludo = "Estimado(a)") 
        {
          if ($nombre == "Alam Brito") 
          {
            $prefijo = "Sr";
          } 
          elseif ($nombre == "Susana Horia") 
          {
            $prefijo = "Sra. o Srta";
          } 
          else 
          {
            $prefijo = "";
          }
          return "{$saludo} {$prefijo}{$separator} {$nombre}";
        }
      }

      $class = new ClaseHija;
      echo $class->prefijoNombre("Alam Brito");
      echo "<br>";  
      echo $class->prefijoNombre("Susana Horia");
    ?>
   
  </body>
</html>
