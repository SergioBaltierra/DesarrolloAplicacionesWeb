$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "¿Esto es todo lo que hay?";
    var patron = /[a-z]/gi;
  	
    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});