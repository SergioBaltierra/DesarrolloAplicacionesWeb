<html>
  <head>
    <title>
      PHP Web con HTML
    </title>
  </head>
  <body> 
    <h1>Function con valor de argumento predeterminado</h1>
    
    <?php
        function setearAltura(int $minheight = 50) 
        {
          echo "La altura es: $minheight <br>";
        }
    
        setearAltura(350);
        setearAltura();
        setearAltura(135);
        setearAltura(80);
    ?>
  </body>
</html>
