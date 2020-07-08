<!DOCTYPE html>
<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body>

  <?php
    // Clase padre
    abstract class Auto 
    {
      public $nombre;
      public function __construct($nombre) 
      {
        $this->nombre = $nombre;
      }
      abstract public function introduccion() : string; 
    }

    // Clases hijas
    class Audi extends Auto 
    {
      public function introduccion() : string 
      {
        return "¡Elija calidad alemana! Soy un $this->nombre!"; 
      }
    }

    class Volvo extends Auto 

    {
      public function introduccion() : string 

      {
        return "Orgulloso de ser sueco! Soy un $this->nombre!"; 
      }
    }

    class Citroen extends Auto 
    {
      public function introduccion() : string 
      {
        return "¡Extravagancia francesa! Soy un $this->nombre!"; 
      }
    }

    //
    $audi = new audi("Audi");
    echo $audi->introduccion();
    echo "<br>";

    $volvo = new volvo("Volvo");
    echo $volvo->introduccion();
    echo "<br>";

    $citroen = new citroen("Citroen");
    echo $citroen->introduccion();
    ?>
   
  </body>
</html>
