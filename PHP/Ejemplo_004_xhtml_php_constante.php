<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>PHP Web con HTML</title>
  </head>
    
  <body>
    <h1>Constante en PHP Web con XHTML</h1>
    
    <?php

      define ("PI", 3.1415926535, TRUE);

      echo "<p>PI: ", PI, "</p>\n";
      echo "<p>pi: ", pi, "</p>";
     
    ?> 
  </body>

</html>