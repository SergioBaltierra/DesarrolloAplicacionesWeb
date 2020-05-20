$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "El 90% de los encuestados prefieren memes de michisss.";
    var patron = /s.$/;
  	
    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});