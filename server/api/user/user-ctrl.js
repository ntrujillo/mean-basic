'use strict'

//apunto al archivo Registro.js por default node agrega la extension .js
var User = require('./user');

function getUser(req, res){
	User.findById(req.user, function(err, user) {
    res.send(user);
  });
}

function createUser(req,res){
	User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
}

module.exports.getUser = getUser;
module.exports.createUser = createUser;