const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const commentCtrl = require('./comment.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/photos/:photoId/comments')
  .get(commentCtrl.list)
  .post(validate(paramValidation.createComment), commentCtrl.create);

module.exports = router;
