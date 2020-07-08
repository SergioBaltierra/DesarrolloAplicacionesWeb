// JS de buscar, controla los eventos del formulario.
$(document).ready(function(){
  // ---------------Variables Globales.-----------------------------------------------------
  
  // validador de inputs y selectores, todos son false por defecto.
  var validar_buscar = false;
 
  // ---------------Eventos de elementos de archivo buscar.xhtml---------------------------
  // 
  $(document).on('click', '#boton_buscar',function()
  { 
    if(this.value.length > 0 || this.value != null || this.value != undefined)
    {
      var pathname = window.location.pathname;
      var pathname_split = pathname.split("/");
      
      while(pathname_split[pathname_split.length-1] != "view")
      {
        pathname_split.pop();
      }

      pathname = pathname_split.join("/");
      window.open(pathname + "/resultado/resultado.xhtml","_blank"); 
    }
    else
    {
      validar_buscar = false;
    }
  });


  // --------------------------------Funciones varias---------------------------------------------------------------
 


  // --------------------------------Funcion autoejecutable---------------------------------------------------------
  // Funcion autoejecutable que carga los selectores de produtos usando la variable opciones_selector.
  
});


















