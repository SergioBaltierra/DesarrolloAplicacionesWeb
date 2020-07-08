<?php
    include "./../../models/connection/connection.php";
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("content-type: application/json; charset=utf-8");

    $user = $_POST["username"];
    $pass = $_POST["password"];

    if (!empty($user))
    {
        if (!empty($pass))
        {
            $result_user = connection($user, $pass);

            if ($result_user === null || $result_user === undefined)
            {
                echo json_encode(array("status" => "error", "response" => "null"));
                die();
            }
            else if($result_user === $user) 
            {
                echo json_encode(array("status" => "success", "response" => $user));
                die();
            }
            else
            {
                echo json_encode(array("status" => "error", "response" => "user incorrecto"));
                die();
            }
    	}
    	else
    	{
    		echo "Contraseña no debe estar vacía.";
    		die();
    	}
    }
    else
    {
    	echo "Usuario no debe estar vacía.";
    	die();
    }
?>