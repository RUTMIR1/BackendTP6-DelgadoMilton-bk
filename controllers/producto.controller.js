const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.getProductos = async (req, res)=>{
    var productos = await Producto.find();
    res.status(200).json(productos);    
}

productoCtrl.getProducto = async (req, res)=>{
    try{
        var vproducto = await Producto.findById(req.params.id);
        res.status(200).json(vproducto);
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al intentar procesar la operacion',
            'error': err
        });
    }
}

productoCtrl.updateProducto = async (req, res)=>{
    var vproducto = new Producto(req.body);
    try{
        await Producto.updateOne({_id: req.body._id}, vproducto);
        res.status(200).json({
            'status': '1',
            'mensaje': 'se actualizo el objeto correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'error procesando la operacion',
            'error': err
        });
    }
}

productoCtrl.createProducto = async (req,res)=>{
    var vproducto = new Producto(req.body);
    try{
        await vproducto.save();
        res.status(200).json({
            'status': '1',
            'mensaje': 'se guardo el producto'
        });      
    }catch(err){
        res.status(400).json({
            'status': '0',
            'mensaje': 'fallo al intentar el proceso',
            'error': err
        });
    }
};

productoCtrl.deleteProducto = async (req, res)=>{
    try{
        await Producto.deleteOne({_id:req.params.id});
        res.status(200).json({
            'status': '1',
            'mensaje': 'el producto se elimino'
        });
    }catch(err){
        res.status(400).json({
            'status':'0',
            'mensaje':'fallo al intentar el proceso',
            'error': err
        });
    }
};

productoCtrl.getDestacados = async (req, res)=>{
    var productos = await Producto.find();
    var destacados = [];
    for(let e of productos){
        if(e.destacado){
            destacados.push(e);
        }
    }
    res.status(200).json(destacados);
}
module.exports = productoCtrl;