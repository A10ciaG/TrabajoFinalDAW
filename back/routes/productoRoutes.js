const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

/**
 * 
 * PETICIONES GET PARA PRODUCTOS
 * 
 */
router.get('/listar/:num_productos?/:offset?', productoController.listar);
router.get('/listar_recientes/:num_productos?', productoController.salidasRecientes);
router.get('/listar_mejores/:num_productos?', productoController.mejoresValorados);
router.get('/nombre/:producto_nombre', productoController.productoPorNombre);
router.get('/:id_producto', productoController.productoPorId);

/**
 * 
 * PETICIONES POST PARA PRODUCTOS
 * 
 */
router.post('/crear', productoController.crearProducto);

/**
 * 
 * PETICIONES PUT PARA PRODUCTOS
 * 
 */
router.put('/:id_producto/editar', productoController.editarProducto);

// EXPORTAMOS EL MÓDULO
module.exports = router;