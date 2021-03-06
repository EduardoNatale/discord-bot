const router = require('express').Router();
const wheatherController = require('./wheather-controller');

router.get('/wheather/today/:city', wheatherController.getWheather);

module.exports = router;
