$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "Hola mundo";
    var patron = /hola/i;

    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});