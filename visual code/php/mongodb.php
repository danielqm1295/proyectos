<?php
require 'vendor/autoload.php';
$cliente = new mongoDB\client("mongodb://localhost:27017");
$bd = $cliente -> dwes;

try {
    $res = $bd ->usuarios->insertOne(
      [ 'nombre' => 'luis', 'clave' => '1234', 'saldo' => 1000 ] );
      echo "Id del ultimo registro: " . $res->getInsertedId() . "<br>";
      $res = $bd->usuarios->insertMany ( [
        ['nombre'=> 'sara', 'clave' => '1234', 'saldo' => 100],
        ['nombre'=> 'enzo', 'clave' => '1234', 'saldo' => 30],
      ] );
      echo "documentos insertados: " . $res->getInsertedCount() . "<br>";
      print_r($res->getInsertedIds());
        }  catch (Exception $e) {
            print ($e);
      }
    
