const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

//middleware
var app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// erutamiento
app.use('/api/producto', require('./routes/producto.route'));
app.use('/api/transaccion', require('./routes/transaccion.route'));
app.use('/api/espectador', require('./routes/espectador.route'));
app.use('/api/ticket', require('./routes/ticket.route'));
//settings
app.set('port', process.env.PORT || 3000);

//STARTING THE SERVER
app.listen(app.get('port'), ()=>{
    console.log('server abierto en el purto', app.get('port'));    
});

