<?php
$cadena_conexion = 'mysql:dbname=empresa;host=127.0.0.1:9980';
$usuario = 'root';
$clave = '';
try {
    $bd = new PDO($cadena_conexion, $usuario, $clave);
} catch (PDOException $e) {
    echo 'Error al conectar con la base de datos: ' . $e->getMessage();
} 