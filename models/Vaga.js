
var mongoose = require('mongoose');

var VagaSchema = new mongoose.Schema({
  dono: String,
  numero: Number,
  secao: String,
  andar: String
});

module.exports = mongoose.model('Vaga', VagaSchema);

