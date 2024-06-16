const { model, models } = require('mongoose');
const Espectador = require('../models/espectador');
const Ticket = require('./../models/ticket');
const TicketCtrl = {};

TicketCtrl.getTickets = async (req, res)=>{
    var tickets = await Ticket.find().populate("espectador");
    res.status(200).json(tickets);
}

TicketCtrl.saveTicket = async (req, res)=>{
    var ticket = new Ticket(req.body);
    try{
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'mensaje': 'se guardo el objeto correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status':'0',
            'mensaje':'error al intentar la operacion'
        });
    }
}

TicketCtrl.deleteTicket = async (req, res)=>{
    try{
        await Ticket.deleteOne({_id:req.params.id});
        res.status(200).json({
            'status': '1',
            'mensaje': 'se elimino el objeto correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status':'0',
            'mensaje':'error al intentar la operacion'
        });
    }
}

TicketCtrl.updateTicket = async (req, res)=>{
    try{
        await Ticket.updateOne({_id:req.body._id}, req.body);
        res.status(200).json({
            'status': '1',
            'mensaje': 'se actualizo el objeto correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status':'0',
            'mensaje':'error al intentar la operacion'
        });
    }
}

TicketCtrl.getTicketByCategoria = async (req, res)=>{
    var tickets = await Ticket.find({categoriaEspectador:req.params.categoria}).populate('espectador');
    res.status(200).json(tickets);
}

TicketCtrl.getTicketById = async (req, res)=>{
    try{
    var ticket = await Ticket.findById(req.params.id).populate('espectador');
    res.status(200).json(ticket);
    }catch(err){
        res.status(400).json({
            'status':'0',
            'mensaje':'error al intentar procesar la operacion',
            'error': err
        });
    }
}

module.exports = TicketCtrl;