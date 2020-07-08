// JS de contacto, controla los eventos del formulario.
$(document).ready(function(){
  // ---------------Variables Globales.-----------------------------------------------------
  
  
  // validador de inputs y selectores, todos son false por defecto.
  var validar_nombre_completo = false;
  var validar_correo = false;
  var validar_telefono = false;
  var validar_mensaje = false;


  // ---------------Eventos de elementos de archivo contacto.xhtml---------------------------
  // Funcion para validar input de nombre completo del formulario.
  $("#nombre").on("input", function (e) 
  {
    // buscamos que el caracter ingresado no sea un numero.
    if (!/^[´a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]*$/ig.test(this.value))
    {
      // reemplazamos lo que no es caracter (alfabeto) por nada.
      this.value = this.value.replace(/[^´a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]+/ig,"");
    }

    // contamos que sea 3 o + las palabras ingresadas.
    if(this.value.split(' ').length >= 3 )
    {
      validar_nombre_completo = true;
      console.log("Nombre completo: " + validar_nombre_completo);
    }
    else
    {
      validar_nombre_completo = false;
    }
  });


  // validamos correo.
  $("#correo").on("input",function (e)
  {
    // buscamos un punto y @ del correo.
    if((/\.{1}/.test(this.value)) && (/@{1}/.test(this.value)))
    {
      validar_correo = true;
      console.log("Corre: " + validar_correo);
    }
    else
    {
      validar_correo = false;
    }
  });


  // Validamos telefono
  $("#telefono").on("input", function () 
  {
    // buscamos que el caracter ingresado sea distinto a los numeros.
    if (!/^[0-9]*$/ig.test(this.value))
    {
      this.value = this.value.replace(/[^0-9]+/ig,"");
      validar_telefono = false;
    }
    
    if(this.value.length >= 7)
    {
      validar_telefono = true;
      console.log("telefono: " + validar_telefono);
    }
    else
    {
      validar_telefono = false;
    }
  });


  $("#mensaje").on("input", function()
  {
    if(this.value.length >= 5 && this.value.length <= 250)
    {
      validar_mensaje = true;
      console.log("Mensaje: " + validar_mensaje);
    }
    else
    {
      validar_mensaje = false;
    }
  });


  // Funcion para enviar contacto, tambien estara pendiente hasta poder guardar en una BD.
  $(document).on('click', '#boton_enviar', function()
  {   
    // Antes de enviar formulario, validamos que esté completado.
    if(validar_nombre_completo == true && validar_correo == true && validar_telefono == true && validar_mensaje == true)
    {
      alert("Formulario completado y enviado correctamente.");
    }
    else
    {
      alert("Formulario incompleto, todos los campos son obligatorios.");
    }
  });


  // --------------------------------Funciones varias---------------------------------------------------------------
  

  // --------------------------------Funcion autoejecutable---------------------------------------------------------
  

});


















