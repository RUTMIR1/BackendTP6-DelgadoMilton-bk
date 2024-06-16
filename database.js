const mongoose = require('mongoose');
const URI = 'mongodb://localhost/TP6';
mongoose.connect(URI)
.then(db=>console.log('La base de datos esta conectado'))
.catch(err=>console.log('No se puedo conectar la base de datos'));
module.exports = mongoose;