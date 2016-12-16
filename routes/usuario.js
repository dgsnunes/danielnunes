var express = require('express');
var auth = require('./auth');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');

/* GET /aluno Listagem de usuários. */
router.route('/').get(auth, function(req, res, next) {
  Usuario.find(function (err, aluno) {
    if (err) return next(err);
    res.json(aluno);
  });
});

/* POST /aluno Cadastro de usuário */
router.route('/').post(auth, function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /aluno/id  Lista filtrada por um usuário*/
router.route('/:id').get(auth, function(req, res, next) {
  Usuario.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /aluno/:id Salva a edição de usuário */
router.route('/:id').put(auth, function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /aluno/:id Deletando o usuário a partir do id */
router.route('/:id').delete(auth, function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
