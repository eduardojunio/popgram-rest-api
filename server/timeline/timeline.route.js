const express = require('express');
const timelineCtrl = require('./timeline.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(timelineCtrl.get);

module.exports = router;
