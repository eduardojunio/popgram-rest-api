const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const authCtrl = require('./auth.controller');

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/login - Returns token if correct username and password is provided */
router.route('/')
  .post(validate(paramValidation.login), authCtrl.login);

module.exports = router;
