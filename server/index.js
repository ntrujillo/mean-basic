'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var registros = require('./api/registro');
var details = require('./api/detail');
var users = require('./api/user');
var path = require('path');
var config = require('./config');
var mode = config.MODE;
var port = config.PORT;
mongoose.connect(config.MONGO_URI);

var app = express();

app.use(bodyParser.json());
if (mode == 'dev') {
   // require('./script')
};
app.use('/api/registro', registros);
app.use('/api/detail', details);
app.use('/api/me', users);


//app.use(express.static(path.join(__dirname,'../client')));
app.use('/', express.static(path.join(__dirname, '../client')));

//se puede especificar la ip como segundo parámetro tambien se pude recibir en la funcion el error en caso 
//de que exista error al ejecutar listen
app.listen(port, '0.0.0.0', function(error) {
	if(error){
		console.log(error);
	}else {
    	console.log('http//localhost:'+port);
	}
});