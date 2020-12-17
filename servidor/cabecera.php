<?php
require "correo.php";
require "sesiones";
require_once "bd.php";
comprobar_sesion();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>pedidos</title>
  </head>
  <body>
    <?php
        require "cabecera";
        $resul = insertar_pedido($_SESSION["carrito"], $_SESSION["usuario"] ["codRes"]);
        if ($resul === false) {
            echo "<p> no se ha podido realizar el pedido"
        } else {
            $correo = $_SESSION ["usuario"], ["correo"]
        } 

  </body>
</html>
