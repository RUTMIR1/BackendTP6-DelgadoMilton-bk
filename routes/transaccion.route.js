const TransaccionCtrl = require('./../controllers/transaccion.controller')
const express = require('express');
const router = express.Router();

router.get('/', TransaccionCtrl.getTransacciones);
router.get('/:email', TransaccionCtrl.getByEmailTransaccion);
router.get('/:origen/:destino', TransaccionCtrl.getByDivisasTransaccion);
router.post('/', TransaccionCtrl.saveTransaccion);
router.delete('/:id', TransaccionCtrl.deleteTransaccion);
module.exports = router;