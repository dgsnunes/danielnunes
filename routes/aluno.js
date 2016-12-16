var express = require('express');
var router = express.Router();
var auth = require('./auth');
var mongoose = require('mongoose');
var Aluno = require('../models/Aluno.js');

/* GET /aluno Listagem de usuários. */
router.route('/').get(auth, function(req, res, next) {
  Aluno.find(function (err, aluno) {
    if (err) return next(err);
    res.json(aluno);
  });
});

/* POST /aluno Cadastro de usuário */
router.route('/').post(auth, function(req, res, next) {
  Aluno.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /aluno/id  Lista filtrada por um usuário*/
router.route('/:id').get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /aluno/:id Salva a edição de usuário */
router.route('/:id').put('/:id', function(req, res, next) {
  Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /aluno/:id Deletando o usuário a partir do id */
router.route('/:id').delete('/:id', function(req, res, next) {
  Aluno.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
