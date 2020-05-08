$(document).ready(function(){
  // Imprime por console.log, funcion simple
  var saludar = function(persona, saludo) {
  	var text = saludo + ', ' + persona;
  	console.log(text);
  };

  saludar('Sergio', 'Hola');  // muestra en la consola 'Hola, Sergio'


  // Retorna un valor, funcion con retorno
  var mi_funcion2 = function(personaaa, saludo)
  {
    var texto = saludo + ', ' + personaaa;
    return texto;
  };

  console.log(mi_funcion2('Sergio','Hola'));


  // retorna otra funcion, funcion con retorno de otra funcion.
  var mi_funcion3 = function(personaa, saludo) 
  {
    var texto = saludo + ', ' + personaa;
    return function() 
    { 
      console.log(texto); 
    };
  };
  
  var saludo = mi_funcion3('Sergio', 'Hola');
  saludo();  // se muestra en la consola 'Hola, Sergio'


  // funcion anonima autoejecutable
  (function()
  {
    var saludo = 'Hola, Sergio';
    console.log(saludo);
  })();


  // Pasar una funcion nombrada como argumento
  var mi_funcion4 = function(fn)
  {
  	var resultado = fn();
  	console.log(resultado);
  };
  
  var mi_otra_funcion = function() {
  	return 'Hola, Sergio';
  };

  mi_funcion4(mi_otra_funcion);   // muestra en la consola 'Hola, Sergio'
});