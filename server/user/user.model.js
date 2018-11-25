const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  following: {
    type: Boolean,
    required: true,
    default: false
  }
});

UserSchema.statics = {
  get(username) {
    return this.findOne({ username })
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  }
};

module.exports = mongoose.model('User', UserSchema);
