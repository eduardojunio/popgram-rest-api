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

module.exports = mongoose.model('Like', LikeSchema);
