// JS de login, controla los eventos del formulario.
$(document).ready(function(){
  // ---------------Variables Globales.-----------------------------------------------------
  var user = "";
  var pass = "";

  var html_before_login = '<div> ' +  
                          ' <div id="contenido" class="container"> ' +
                            ' <div class="row"> ' +
                              ' <div class="title col-lg-12 col-md-12 col-sm-12 col-xs-12"> ' +
                                ' <h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2">Login</h2> ' +
                                ' <h5 class="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">Ingrese con su usuario y contreseña:</h5> ' +
                              ' </div> ' +
                            ' </div> ' +  
                          ' </div> ' +
                          ' <div id="login" class="container"> ' +
                            ' <form class=".form-group" method="post"> ' +
                              ' <div class="formulario-login"> ' +
                                ' <label for="user">Usuario</label> ' +
                                ' <input type="text" class="form-control" id="user" name="user"/> ' +
                              ' </div> ' +
                              ' <div class="formulario-login"> ' +
                                ' <label for="pass">Contraseña</label> ' +
                                ' <input type="password" class="form-control" id="pass" name="pass"/> ' +
                              ' </div> ' +
                              ' <div class="formulario-login" style="left:20%;"> ' +                                                             
                                ' <div class="col-lg-10 col-sm-10"></div> ' +
                                ' <div class="col-lg-2 col-sm-2"> ' +                                                                 
                                  ' <button id="boton_ingresar" type="button" class="btn btn-primary" style="float:right">Ingresar</button> ' +
                                ' </div> ' +
                              ' </div> ' +
                            ' </form> ' +                                                        
                            ' <div class="clear"></div> ' +
                           ' </div> ' + 
                          ' </div>';

  var html_after_login =  ' <div id="afterlogin" class="container"> ' +
                            ' <div id="menu-login"> ' +
                              ' <div class="row"> ' +
                                ' <div class="title col-lg-12 col-md-12 col-sm-12 col-xs-12"> ' +
                                  ' <h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2">Bienvenido</h2> ' +
                                  ' <h5 class="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">Escoja una opción: </h5> ' +
                                ' </div> ' +
                              ' </div> ' +
                            ' </div> ' +
                            ' <div id="menu-login"> ' +
                              ' <ul> ' +
                                ' <li>Opción A</li> ' +
                                ' <li>Opción B</li> ' +
                              ' </ul> ' +
                            ' </div> ' +
                            ' <div class="formulario-login" style="left:20%;"> ' +                              
                              ' <div class="col-lg-10 col-sm-10"></div> ' +                            
                              ' <div class="col-lg-2 col-sm-2"> ' +                              
                                ' <button id="boton_salir" type="button" class="btn btn-primary" style="float:right">Salir</button> ' +
                              ' </div> ' +
                            ' </div> ' +
                            ' <div class="clear"></div> ' +
                          ' </div> ';                                                  

  // validador de inputs y selectores, todos son false por defecto.
  var validar_user = false;
  var validar_pass = false;
  
  // ---------------Eventos de elementos de archivo login.xhtml---------------------------
  // Funcion para validar input de nombre completo del formulario.
  $(document).on('input', '#user', function()
  //$("#user").on("input", function (e)
  {
    // 
    if(this.value === "")
    {
      validar_user = false; 
    }
    else
    {
      user = this.value;
      validar_user = true;
      console.log("Validar User: " + validar_user);
    }
  });


  // Funcion para validar input de run.
  $(document).on('input', '#pass', function()
  // $("#pass").on("input", function (e)
  { 
    // 
    if(this.value === "")
    {
      validar_pass = false;
    }
    else
    {
      pass = calcMD5(this.value);
      validar_pass = true;
      console.log("Validar Pass: " + validar_pass);
    }
  });


  // Funcion para enviar pedido, tambien estara pendiente hasta poder guardar en una BD.
  $(document).on('click', '#boton_ingresar', function(e)
  { 
    e.preventDefault();
    // Antes de enviar formulario, validamos que esté completado.
    if(validar_user === false && validar_pass === false)
    {
      alert("Formulario incompleto, todos los campos son obligatorios.");
    }
    else
    {
      var datos_login = 
      {
        'username' : user,
        'password' : pass
      };
      
      var base_url = window.location.origin;
      var pathname_url = window.location.pathname;
      var base_url = base_url + '/' +  pathname_url.split('/')[1]

      $.ajax({
        type: "POST",
        url: base_url + "/controllers/connection/connection.php",
        origin: window.location.href, //base_url + "/Solucion_guia_06_3/view/login/login.xhtml",
        data: datos_login,
        dataType  : 'json',
        success: function(data)
        {
          var objeto = document.getElementById('before_login');
          objeto.remove();
          document.getElementById("pre_after_login").innerHTML = '<div id="after_login"></div>' ;
          document.getElementById('after_login').innerHTML = html_after_login; 
        },
        error: function(thrownError){
          console.log(thrownError);
        }
      });
    }
  });

  $(document).on('click', '#boton_salir', function()
  { 
    remove_after_login();
    document.getElementById("pre_before_login").innerHTML = '<div id="before_login"></div>' ;
    load_before_login();
  });


  // --------------------------------Funciones varias---------------------------------------------------------------
  // Funcion que calcula la suma total de valor total, ademas la agrega en campo total, final de la cuarta columna.

  function login_ok()
  {
    remove_before_login();
    document.getElementById("pre_after_login").innerHTML = '<div id="after_login"></div>' ;
    load_after_login();
  };

  function load_before_login() {
    document.getElementById('before_login').innerHTML = html_before_login;
  };

  function remove_before_login(){
    var objeto = document.getElementById('before_login');
    objeto.remove();
  }

  function load_after_login(){
    document.getElementById('after_login').innerHTML = html_after_login;
  }

  function remove_after_login(){
    var objeto = document.getElementById('after_login');
    objeto.remove();
  }

  // --------------------------------Funcion autoejecutable---------------------------------------------------------
  (function ()
  {    
    load_before_login();
  })();
  
});