<?php
$host = "localhost";
$usuario = "root";
$password = "";
$base_datos = "festival" ;

$conn = new mysqli($host, $usuario, $password, $base_datos);

if($conn->connect_error){
    die("conexion fallida: " . $conn->connect_error);
}
?>