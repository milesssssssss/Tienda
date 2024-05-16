<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php'); 
/*
 *  Clase para manejar el comportamiento de los datos de la tabla administrador.
 */
class PedidosHandler
{
    /*
     *  Declaración de atributos para el manejo de datos.
     */
    protected $id = null;
    protected $estado = null;

    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    //Buscar historial
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT p.id_pedido AS ID, c.nombre_cliente, p.direccion_pedido, p.fecha_pedido, p.estado_pedido FROM tb_pedidos p
        INNER JOIN clientes c ON p.id_cliente = c.id_cliente
        WHERE nombre_cliente LIKE ? OR apellido_cliente LIKE ?
        ORDER BY nombre_cliente;';
        $params = array($value, $value);
        return Database::getRows($sql, $params);
    }
    //Leer historial
    public function readAll()
    {
        $sql = 'SELECT p.id_pedido AS ID, c.nombre_cliente, p.direccion_pedido, p.fecha_pedido, p.estado_pedido FROM tb_pedidos  p
        INNER JOIN tb_clientes c ON p.id_cliente = c.id_cliente
        ORDER BY nombre_cliente;';
        return Database::getRows($sql);
    }

    //Función para leer un pedido del historial.
    public function readOne()
    {
        $sql = 'SELECT p.id_pedido AS ID, c.nombre_cliente, p.direccion_pedido, p.fecha_pedido, p.estado_pedido FROM tb_pedidos p
        INNER JOIN tb_clientes c ON p.id_cliente = c.id_cliente
        WHERE id_pedido = ?
        ORDER BY nombre_cliente;';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    //Función para cambiar el estado de un cliente.
    public function changeState()
    {
        $sql = 'CALL actualizar_estado_pedido(?,?);';
        $params = array($this->id, $this->estado);
        return Database::executeRow($sql, $params);
    }
}