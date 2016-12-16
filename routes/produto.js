var express = require('express');
var router = express.Router();
var auth = require('./auth');
var mongoose = require('mongoose');
var Produto = require('../models/Produto.js');

/* GET /usuario Listagem de usuários. */
router.route('/').get(auth, function(req, res, next) {
  Produto.find(function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* POST /usuario Cadastro de usuário */
router.route('/').post(auth, function(req, res, next) {
  Produto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /usuario/id  Lista filtrada por um usuário*/
router.route('/:id').get(auth, function(req, res, next) {
  Produto.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /usuario/:id Salva a edição de usuário */
router.route('/:id').put(auth, function(req, res, next) {
  Produto.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /usuario/:id Deletando o usuário a partir do id */
router.route('/:id').delete(auth, function(req, res, next) {
  Produto.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
