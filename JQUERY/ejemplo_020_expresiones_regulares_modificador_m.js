$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "\n¿Esto \nes \ntodo lo \nque hay?";
    var patron = /to/m; // funciona mejor con gi
  	
    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});