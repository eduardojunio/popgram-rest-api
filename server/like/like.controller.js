const Like = require('./like.model');

function createLike(user, photoId) {
  const photoLike = new Like({
    user,
    photoId
  });

  return photoLike.save();
}

function like(req, res, next) {
  const { user } = req.body;
  const { photoId } = req.params;

  Like.findOne({ user, photoId })
    .exec()
    .then((foundLike) => {
      if (!foundLike) {
        createLike(user, photoId)
          .then(savedLike => res.json(savedLike))
          .catch(e => next(e));
      } else {
        foundLike.remove().then(() => {
          res.json({ message: 'Like removed' });
        });
      }
    });
}

module.exports = { like };
