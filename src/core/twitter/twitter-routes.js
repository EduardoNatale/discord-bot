const router = require('express').Router();
const twitterController = require('./twitter-controller');

router.get('/twitter/timeline', twitterController.timeline);

module.exports = router;
