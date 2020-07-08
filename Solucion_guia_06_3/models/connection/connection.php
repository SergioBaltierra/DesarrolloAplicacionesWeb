<?php
    include './../../models/config/config.php';

    // Intentamos abrir conexion
    function connection($user, $pass)
    {   
        // echo $servername;
        // echo $database;
        // echo $port;
        // echo $username;
        // echo $password;

        $servername = "127.0.0.1";
        $database = "PE2_DAW";
        $port = 3306;
        $username = "root";
        $password = "root2020";
                
        try 
        {
            $conn = new PDO("mysql:host=".$servername.";dbname=".$database.";port=".$port, $username, $password);

            // establece el modo de error PDO en excepción
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $conn->prepare("SELECT USER FROM USUARIO WHERE PASS = :pass;");

            $stmt->execute(array(':pass' => $pass));

            $value = $stmt->fetch(PDO::FETCH_OBJ);
        
            // Cerramos conexion
            $conn = null;

            //
            return $value->USER;
        } 
        catch(PDOException $e) 
        {
            echo "Conexion fallida: " . $e->getMessage();
        }

    }
?>