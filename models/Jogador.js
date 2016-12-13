
var mongoose = require('mongoose');

var JogadorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  altura: Number,
  peso: Number,
  nacionalidade: String,
  time : String
});

module.exports = mongoose.model('Jogador', JogadorSchema);

