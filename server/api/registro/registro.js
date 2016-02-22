'use strict'
var mongoose = require('mongoose');

//cuando levanto la bdd MongoDB en modo desarrollo y el schema que especifico no existe
//MongoDB por default lo crea , en modo producción hay que crear primero el schema en la BDD
var Schema = mongoose.Schema;

var RegistroSchema = new Schema({
	junta: Number,
	genero: Number,
	validos: Number,
	blancos: Number,
	nulos: Number,
	createdAt: Date,
	updatedAt: Date,
	details: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detail' }]
});

/*RegistroSchema.index({junta:'Number',genero:'Number'});*/

module.exports = mongoose.model('Registro',RegistroSchema);