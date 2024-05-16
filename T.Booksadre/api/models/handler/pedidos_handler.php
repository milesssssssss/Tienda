<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
*	Clase para manejar el comportamiento de los datos de las tablas PEDIDO y DETALLE_PEDIDO.
*/
class PedidoHandler
{
    /*
    *   Declaración de atributos para el manejo de datos.
    */
    protected $id = null;
    protected $cliente = null;
    protected $direccion = null;
    protected $estado = null;
    protected $fecha = null;

   
    /*
    *   Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
    */

    public function searchRows()
{
    $value = '%' . Validator::getSearchValue() . '%';
    $sql = 'SELECT id_pedido, id_cliente, direccion_pedido, fecha_registro, estado_pedido
            FROM pedido
            WHERE nombre_cliente LIKE ? OR id_cliente LIKE ? OR direccion_pedido LIKE ? OR estado_pedido LIKE ?
            ORDER BY direccion_pedido';
    $params = array($value, $value, $value, $value);
    return Database::getRows($sql, $params);
}

public function createRow()
{
    $sql = 'INSERT INTO pedido(id_cliente, direccion_pedido, fecha_registro, estado_pedido)
            VALUES(?, ?, ?, ?)';
    $params = array($this->cliente, $this->direccion, $this->fecha,$this->estado);
    return Database::executeRow($sql, $params);
}

public function readAll()
{
    $sql = 'SELECT id_pedido, id_cliente, direccion_pedido, fecha_registro, estado_pedido
            FROM pedido
            ORDER BY direccion_pedido';
    return Database::getRows($sql);
}


public function readOne()
{
    $sql = 'SELECT id_pedido, id_cliente, direccion_pedido, fecha_registro, estado_pedido
            FROM pedido
            WHERE id_pedido = ?';
    $params = array($this->id);
    return Database::getRow($sql, $params);
}

public function updateRow()
{
    $sql = 'UPDATE pedido
            SET id_cliente = ?, direccion_pedido = ?, estado_pedido = ?
            WHERE id_pedido = ?';
    $params = array($this->cliente, $this->direccion, $this->estado, $this->id);
    return Database::executeRow($sql, $params);
}

public function deleteRow()
{
    $sql = 'DELETE FROM pedido
            WHERE id_pedido = ?';
    $params = array($this->id);
    return Database::executeRow($sql, $params);
}

}
