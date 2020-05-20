// JS de pedidos, controla los eventos del formulario.
$(document).ready(function(){
  // ---------------Variables Globales.-----------------------------------------------------
  // Arreglo de opciones del selector producto
  var opciones_selector = [
    {"class": "producto_0", "name": "Elegir un producto",     "value": "0"}, 
    {"class": "producto_1", "name": "Yogur light",            "value": "100"},
    {"class": "producto_2", "name": "Yogur extra light",      "value": "150"},
    {"class": "producto_3", "name": "Leche entera",           "value": "200"},
    {"class": "producto_4", "name": "Leche semi descremada",  "value": "300"},
    {"class": "producto_5", "name": "Leche descremada",       "value": "400"}
  ];
  
  // validador de inputs y selectores, todos son false por defecto.
  var validar_nombre_completo = false;
  var validar_run = false;
  var validar_correo = false;
  var validar_direccion = false;
  var validar_nueva_fila = false;
  var validar_eliminar_fila = false;
  var validar_cantidad = false;
  var validar_producto = false;


  // ---------------Eventos de elementos de archivo pedidos.xhtml---------------------------
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
  });


  // Funcion para validar input de run.
  $("#run").on("input", function (e)
  {
    var div1, div2, div3, div4;
    var run = this.value;

    // eliminamos ingreso de caracteres como letras, excepto k.
    if(!/^[0-9kK.-]*$/i.test(run))
    {
      //run = run.replace(/[ a-jl-záéíóúüñA-JL-ZÁÉÍÓÚÜÑ\s]+/ig,"");
      run = run.replace(/[^0-9kK.-]+/ig,"");
    }
    
    if(/[0-9kK.-]*$/i.test(run))
    {
      // eliminamos puntos y guin para agregarlos segun formato de 8 o 9 digitos.
      run = run.replace(/[.-]+/ig,"");
      if(run.length == 8)
      {
        div1 = run.slice(0,1);
        div2 = run.slice(1,4);
        div3 = run.slice(4,7);
        div4 = run.slice(7,8);

        run = div1 + "." + div2 + "." + div3 + "-" + div4;
      }
      else if(run.length == 9)
      {
        div1 = run.slice(0,2);
        div2 = run.slice(2,5);
        div3 = run.slice(5,8);
        div4 = run.slice(8,9);

        run = div1 + "." + div2 + "." + div3 + "-" + div4;
      }

      this.value = run;

      // Validamos cantidad de puntos y un guion.
      if((/.{2}/.test(this.value)) && (/-{1}/.test(this.value)))
      {
        validar_run = true;
        console.log("Run: " + validar_run);
      }
      else
      {
        validar_run = false;
      }
    }
  });


  // validamos correo.
  $("#correo").on("input",function (e)
  {
    // buscamos un punto y @ del correo.
    if((this.value.search(".") != -1) && (this.value.search("@") != -1))
    {
      validar_correo = true;
      console.log("Corre: " + validar_correo);
    }
  });


  // Validamos direccion
  $("#direccion").on("input", function (e) 
  {
    // buscamos que el caracter ingresado sea distinto a los caracteres (alfabeto).
    if (!/^[´a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9#º\s,/]*$/ig.test(this.value))
    {
      this.value = this.value.replace(/[^´a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9#º\s,/]+/ig,"");
      validar_direccion = false;
    }
    else
    {
      validar_direccion = true;
      console.log("Direccion: " + validar_direccion);
    }
  });


  // Agrega nueva fila, debajo de la ultima fila.
  $("#agregarFila").on("click", function(e)
  {
    // No reload pagina.
    // Al llamar este método, la acción predeterminada del evento no se activará.
    e.preventDefault(); 

    var ultima_fila = $("#id_tbody tr").length - 1;
    var id_ultima_fila = $("#id_tbody tr")[ultima_fila].id;
    var fila_id = id_ultima_fila.split("-");
    fila_id[1] = parseInt(fila_id[1]) + 1;
    
    var nueva_fila = "<tr id='" + fila_id[0] + "-" + fila_id[1] + "'>" +
                     "  <td id='" + fila_id[0] + "-" + fila_id[1] + "-" + "1'>" +
                     "    <input type='numeric' class='form-control cantidad' value='0'/>" +
                     "  </td>" +
                     "  <td id='" + fila_id[0] + "-" + fila_id[1] + "-" + "2'>" +
                     "    <select class='form-control producto'></select>" +
                     "  </td>" +
                     "  <td id='" + fila_id[0] + "-" + fila_id[1] + "-" + "3'>" +
                     "    <input type='numeric' class='form-control' value='0' disabled='disabled'/>" +
                     "  </td>" +  
                     "  <td id='" + fila_id[0] + "-" + fila_id[1] + "-" + "4'>" +
                     "    <input type='numeric' class='form-control valor_total' value='0' disabled='disabled'/>" +
                     "  </td>" +
                     "</tr>";

    // Agregamos nueva fila
    var nuevaFilaObj = $(nueva_fila);
    nuevaFilaObj.hide();
    $("#id_tbody tr:last").after(nuevaFilaObj);
    nuevaFilaObj.fadeIn("slow");
    
    // Cargamos opciones al selector de la nueva fila.
    for (var i = 0; i < opciones_selector.length; i++) 
    { 
      $("#" + fila_id[0] + "-" + fila_id[1] + "-2 select").append("<option class='" + opciones_selector[i].class + "' value='" + opciones_selector[i].value + "'>" + opciones_selector[i].name + "</option>");
    }
    
    // Validamos la nueva fila.
    validar_nueva_fila = true;
    console.log("Crea: " + validar_nueva_fila);
    
    // return false;
  });
  

  // Eliminar la ultima fila de la tabla.
  $("#eliminarFila").on("click",function(e)
  { 
    // No reload pagina.
    // Al llamar este método, la acción predeterminada del evento no se activará.
    e.preventDefault(); 

    // Antes de eliminar fila, verificamos que tabla no quede sin filas.
    if ($("#id_tbody tr").length-1 != 0)
    {
      var ultima_fila = $("#id_tbody tr").length - 1;
      var id_ultima_fila = $("#id_tbody tr")[ultima_fila].id;
      
      // validamos que la fila por eliminar no tenga datos ingresados.
      if($("#"+id_ultima_fila + "-1 input").val() == "0" && $("#"+id_ultima_fila + "-2 select option:selected").val() == "0")
      {
        $("#"+id_ultima_fila).remove();
        validar_eliminar_fila = true;
        console.log("Elimina: " + validar_eliminar_fila);
      }
      else
      {
        validar_eliminar_fila = false;
      }
    }
    
  });


  // validamos solo el ingreso de numeros en input cantidad.
  $(document).on('change', '.cantidad',function()
  { 
    // Validamos que el valor ingresado sea un numero
    if(!/^[0-9]*$/i.test(this.value))
    {
      this.value = this.value.replace(/[^0-9]+/ig,"");
    }

    // Si valor de cantidad es mayor que cero, hacemos calculo del TOTAL de pedido.
    if(this.value > 0)
    {
      var id_tr = $(this).closest('tr')[0].id;
      var valor_unitario = $("#" + id_tr + "-3 input").val();
      var valor_total = this.value*valor_unitario;
      $("#" + id_tr + "-4 input").val(valor_total);
    }

    suma_valor_total();
  });


  // Eventos cuando cambio selector producto.
  $(document).on('change', '.producto',function()
  {
    // Modifica valor de input cantidad, al cambiar selector producto de la misma fila. 
    $(this).closest('tr').find('.cantidad').val(0);

    // extremos los id de los distintos campos del producto: cantidad y valor unitario
    var id_td_cantidad = $(this).closest('tr')[0].id + "-1";
    var id_td_valor_unitario = $(this).closest('tr')[0].id + "-3";
    
    // Modificamos valor unitario, al cambiar opcion en selector.
    $("#"+id_td_valor_unitario +" input").val($("#" + $(this).closest('tr')[0].id + "-2 select option:selected").val());
    
    // Calculamos el valor total = cantidad * valor unitario.
    var id_td_valor_total = $(this).closest('tr')[0].id + "-4";
    $("#"+id_td_valor_total +" input").val($("#" + id_td_valor_unitario + " input").val() * $("#" + id_td_cantidad + " input").val() );

    suma_valor_total();
  });


  // Funcion pendiente, hasta poder guardar en una BD.
  $(document).on('click', '#boton_guardar', function()
  { 
    alert("Formulario guardado, puede seguir editando más adelante.");
  });


  // Funcion para enviar pedido, tambien estara pendiente hasta poder guardar en una BD.
  $(document).on('click', '#boton_enviar', function()
  { 
    // Validamos que haya cantidad ingresada
    $("#id_tbody .cantidad").each(function(){
      if(this.value != 0)
      {
        validar_cantidad = true;
      }
      else
      {
        validar_cantidad = false;
      }
    });

    
    // Validamos que haya producto escogido.
    $("#id_tbody .producto").each(function(){
      if(this.value != 0)
      {
        validar_producto = true;
      }
      else
      {
        validar_producto = false;
      }
    });

    
    // Antes de enviar formulario, validamos que esté completado.
    if(validar_nombre_completo == true && validar_run == true && validar_correo == true && validar_direccion == true && validar_cantidad == true && validar_producto == true)
    {
      alert("Formulario completado y enviado correctamente.");
    }
    else
    {
      alert("Formulario incompleto, todos los campos son obligatorios.");
    }
  });


  // --------------------------------Funciones varias---------------------------------------------------------------
  // Funcion que calcula la suma total de valor total, ademas la agrega en campo total, final de la cuarta columna.
  function suma_valor_total()
  {
    var total = 0;
    var i = 0
    $("#id_tbody .valor_total").each( function() 
    {
      if(!isNaN(this.value))
      {
        total += parseInt(this.value);
      }
    });
    
    $("#suma_valor_total").val(total);
  }


  // --------------------------------Funcion autoejecutable---------------------------------------------------------
  // Funcion autoejecutable que carga los selectores de produtos usando la variable opciones_selector.
  (function ()
  {    
    // Cargamos selector productos, usando variable opciones_selector.
    for (var i = 0; i < opciones_selector.length; i++) 
    { 
      $(".producto").append("<option class='" + opciones_selector[i].class + "' value='" + opciones_selector[i].value + "'>" + opciones_selector[i].name + "</option>");
    }
  })();

});


















