const productoCtrl = require('./../controllers/producto.controller');

const express = require('express');
const router = express.Router();

router.get('/',productoCtrl.getProductos);
router.get('/destacados', productoCtrl.getDestacados);
router.get('/:id',productoCtrl.getProducto);
router.post('/', productoCtrl.createProducto);
router.put('/:id', productoCtrl.updateProducto);
router.delete('/:id', productoCtrl.deleteProducto);


module.exports = router;