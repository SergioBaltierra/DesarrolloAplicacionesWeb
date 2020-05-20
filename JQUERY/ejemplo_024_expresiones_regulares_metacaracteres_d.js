$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "El 90% de los encuestados prefieren memes de michis.";
    var patron = /\d/g; // backslash (\) , slash (/).
  	
    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});