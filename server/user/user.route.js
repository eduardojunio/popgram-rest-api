const express = require('express');
const userCtrl = require('./user.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:userId')
  .get(userCtrl.get);

module.exports = router;
