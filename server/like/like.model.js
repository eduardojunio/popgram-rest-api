const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    index: true
  },
  photoId: {
    type: String,
    required: true,
    index: true
  }
});

LikeSchema.statics = {
  liked(user, photoId) {
    return this.findOne({ user, photoId })
      .exec()
      .then(like => !!like);
  }
};

module.exports = mongoose.model('Like', LikeSchema);
