const mockData = require('../timeline/mock.json');
const User = require('./user.model');
const httpStatus = require('http-status');

function get(req, res) {
  User.get(req.params.userId)
    .then((user) => {
      res.json({
        user: {
          fullName: 'Din Din',
          description: 'Eu viajo pelo mundo em minha moeda-foguete e tenho um mascote porquinho',
          picture: 'https://scontent.cdninstagram.com/vp/19e7fa54f806c3ddd061f525f965b280/5C41420B/t51.2885-15/sh0.08/e35/s750x750/41519374_268747557299627_5213480865193191470_n.jpg?se=4'
        },
        followers: user.following ? 4573 : 4572,
        following: 1078,
        amIFollowing: !!user.following,
        postsCount: 20,
        posts: mockData.data
      });
    })
    .catch((e) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
}

function follow(req, res) {
  User.follow(req.params.userId)
    .then((user) => {
      res.json(user);
    })
    .catch((e) => {
      res.json({ message: e.message });
    });
}

module.exports = { get, follow };
