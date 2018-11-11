const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const commentRoutes = require('./server/comment/comment.route');
const likeRoutes = require('./server/like/like.route');
const timelineRoutes = require('./server/timeline/timeline.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/login', authRoutes);

// comment routes
router.use('/', commentRoutes);
router.use('/', likeRoutes);

router.use('/timeline', timelineRoutes);

module.exports = router;
