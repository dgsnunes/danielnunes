var express = require('express');
var router = express.Router();
var auth = require('./auth');
var Perfil = require('../models/Perfil.js');

/* GET /perfil Listagem de perfis. */
router.route('/').get(auth, function(req, res, next) {
  Perfil.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /perfil Cadastro de perfil */
router.route('/').post(auth, function(req, res, next) {
  Perfil.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /perfil/id  Lista filtrada por um perfil*/
router.route('/:id').get(auth, function(req, res, next) {
  Perfil.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /perfil/:id Salva a edição de perfil */
router.route('/:id').put(auth, function(req, res, next) {
  Perfil.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /perfil/:id Deletando o perfil a partir do id */
router.route('/:id').delete(auth, function(req, res, next) {
  Perfil.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
