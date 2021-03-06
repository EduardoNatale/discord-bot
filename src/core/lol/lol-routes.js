const router = require('express').Router();
const lolController = require('./lol-controller');

router.get('/lol/stats/:user', lolController.stats);

module.exports = router;
