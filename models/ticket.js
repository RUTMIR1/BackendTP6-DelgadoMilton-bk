const mongoose = require('mongoose');
const espectador = require('./espectador');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    precioTicket: {type:Number, required: true},
    categoriaEspectador: {type:String, required: true},
    fechaCompra: {type:String, required: true},
    espectador: {type:Schema.Types.ObjectId, ref:espectador, required: true}
});

module.exports = mongoose.model.Ticket || mongoose.model('Ticket', TicketSchema);