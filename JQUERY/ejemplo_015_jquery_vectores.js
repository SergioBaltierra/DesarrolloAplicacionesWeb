$(document).ready(function(){
  var mi_vector = [ 'hola', 'mundo' ];

  console.log("Vector completo: " + mi_vector);
  console.log("Primer elemento: " + mi_vector[0]);
  console.log("Segundo elemento: " +mi_vector[1]);

  // funciones sobre vectores:

  // calcular largo del vector
  var largo_mi_vector = mi_vector.length;
  console.log("Largo de mi_vector es: " + largo_mi_vector);

  // agregar nuevo elemento al vector
  mi_vector.push('!');
  console.log("Nuevo elemento de mi_vector es: " + mi_vector);

  // eliminar un elemento al vector
  mi_vector.pop('!');
  mi_vector.pop('mundo');
  console.log("Eliminamos un elemento de mi_vector es: " + mi_vector);
});