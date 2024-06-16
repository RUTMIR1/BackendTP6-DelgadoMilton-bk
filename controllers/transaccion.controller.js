const Transaccion = require('./../models/transaccion');
const TransaccionCtrl = {};

TransaccionCtrl.getTransacciones = async (req, res)=>{
    var transacciones = await Transaccion.find();
    res.status(200).json(transacciones);
}

TransaccionCtrl.saveTransaccion = async (req, res)=>{
    var vTransaccion = new Transaccion(req.body);
    try{
        await vTransaccion.save();
        res.status(200).json({
            'status': '1',
            'mensaje': 'se agrego una nueva transaccion'
        });
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al realizar la operacion',
            'error': err
        });
    }
}

TransaccionCtrl.deleteTransaccion = async (req, res)=>{
    try{
        await Transaccion.deleteOne({_id: req.params._id});
        res.status(200).json({
            'status': '1',
            'mensaje': 'se elimino la transaccion'
        });
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al realizar la operacion',
            'error': err
        });
    }
}
TransaccionCtrl.getByEmailTransaccion = async (req, res)=>{
    try{
        var transaccion = await Transaccion.find({'emailCliente': req.params.email});
        res.status(200).json(transaccion);
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al intentar procesar la operacion',
            'error': err
        });
    }
}
TransaccionCtrl.getByDivisasTransaccion = async (req, res)=>{
    try{
        var transacciones = await Transaccion.find({
            'monedaOrigen': req.params.origen,
            'monedaDestino': req.params.destino
        });
        res.status(200).json(transacciones);
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al intentar procesar la operacion',
            'error': err
        });
    }
}

module.exports = TransaccionCtrl;