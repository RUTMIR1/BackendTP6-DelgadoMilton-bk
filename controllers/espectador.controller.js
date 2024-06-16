const Espectador = require('./../models/espectador');
const EspectadorCtrl = {};

EspectadorCtrl.getEspectadores = async (req, res)=>{
    var espectadores = await Espectador.find();
    res.status(200).json(espectadores);
}

EspectadorCtrl.getEspectador = async (req, res)=>{
    try{
        var espectador = await Espectador.findById(req.params.id);
        res.status(200).json(espectador);
    }catch(err){
        res.status(400).json({
            'status': '0',
            'error': 'error al procesar la operacion'
        });
    }   
}

EspectadorCtrl.createEspectador = async (req, res)=>{
    var espectador = new Espectador(req.body);
    try{
        await espectador.save();
        res.status(200).json({
            'status': '1',
            'mensaje': 'se guardo el espectador'
        });
    }catch(err){
        res.status(400).json({
            'status': '0',
            'error': 'fallo al intentar el proceso'
        });
    }
}

module.exports = EspectadorCtrl;