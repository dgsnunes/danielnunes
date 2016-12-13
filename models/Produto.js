
var mongoose = require('mongoose');

var ProdutoSchema = new mongoose.Schema({
  nome: String,
  marca: String,
  nacionalidade: String,
  validade: String,
  peso: Number,
  codBarra: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);

