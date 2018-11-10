const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const likeCtrl = require('./like.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/photos/:photoId/likes')
  .put(validate(paramValidation.likePhoto), likeCtrl.like);

module.exports = router;
