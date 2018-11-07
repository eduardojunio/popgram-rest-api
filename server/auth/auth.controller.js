const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../../config/config');

const user = {
  username: 'popgram',
  password: 'popgram123'
};

function login(req, res, next) {
  if (req.body.username === user.username && req.body.password === user.password) {
    return res.json({
      token: config.token,
      username: user.username
    });
  }

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}

module.exports = { login };
