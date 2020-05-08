$(document).ready(function(){
  var mi_objeto = {
    decir_hola: function() 
    {
      console.log('hola');
    },
    mi_nombre: 'Sergio'
  };
  
  mi_objeto.decir_hola();   // se llama al método decir_hola,
                            // el cual muestra en la consola 'hola'
  console.log(mi_objeto.mi_nombre); // se llama a la propiedad mi_nombre,
                                    // la cual muestra en la consola 'Sergio'
});