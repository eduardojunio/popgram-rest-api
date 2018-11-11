const mock = require('./mock.json');
const Comment = require('../comment/comment.model');
const Like = require('../like/like.model');

function get(req, res) {
  const mockData = mock.data;
  const timeline = [];
  mockData.map((photo, index) => {
    const updatedPhoto = Object.assign({}, photo);
    Like.liked('popgram', updatedPhoto._id)
      .then((liked) => {
        Comment.total(updatedPhoto._id)
          .then((total) => {
            updatedPhoto.liked = liked;
            updatedPhoto.comments = total;
            timeline.push(updatedPhoto);
            if (index === (mockData.length - 1)) {
              res.json(timeline);
            }
          });
      });
    return photo;
  });
}

module.exports = { get };
