const Comment = require('./comment.model');

function create(req, res, next) {
  const comment = new Comment({
    author: req.body.author,
    content: req.body.content,
    photoId: req.params.photoId
  });

  comment.save()
    .then(savedComment => res.json(savedComment))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Comment.list({ limit, skip }, req.params.photoId)
    .then(comments => res.json(comments))
    .catch(e => next(e));
}

module.exports = { create, list };
