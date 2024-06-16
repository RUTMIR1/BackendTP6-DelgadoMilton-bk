const EspectadorCtrl = require('./../controllers/espectador.controller');
const express = require('express');
const router = express.Router();

router.get('/', EspectadorCtrl.getEspectadores);
router.get('/:id', EspectadorCtrl.getEspectador);
router.post('/', EspectadorCtrl.createEspectador);

module.exports = router;