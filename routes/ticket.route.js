const express = require('express');
const TicketCtrl = require('./../controllers/ticket.controller');
const router = express.Router();

router.get('/', TicketCtrl.getTickets);
router.get('/categoria/:categoria',TicketCtrl.getTicketByCategoria);
router.get('/:id', TicketCtrl.getTicketById);
router.post('/', TicketCtrl.saveTicket);
router.delete('/:id',TicketCtrl.deleteTicket);
router.put('/',TicketCtrl.updateTicket);

module.exports = router;