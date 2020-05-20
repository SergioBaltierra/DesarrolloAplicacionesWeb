$(document).ready(function()
{
  $("#probar").click(function()
  {
    var palabra = "Azul, verde, rojo, amarillo, verde, azul y negro.";
    var patron = /(azul|verde)/gi;
  	
    $("#mostrarString").text("Cadena: " + palabra);
    $("#mostrarPatron").text("Patrón y modificador: " + patron);

    var resultado = palabra.match(patron);
      
    $("#resultado").text("Resultado: " +resultado);
  });
});