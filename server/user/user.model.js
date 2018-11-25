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
  },

  follow(username) {
    return this.get(username)
      .then((user) => {
        const updatedFollowing = { following: !user.following };
        return this.update({ username }, updatedFollowing)
            .exec()
            .then(() => updatedFollowing);
      });
  }
};

module.exports = mongoose.model('User', UserSchema);
