var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cep: Number,
  endereco: String,
  perfil : {
  	 nome:String
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
