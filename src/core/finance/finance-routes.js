const router = require('express').Router();
const financeController = require('./finance-controller');

router.get('/finance/quote', financeController.getQuote);

module.exports = router;
