const financeRoutes = require('./finance/finance-routes');
const wheatherRoutes = require('./wheather/wheather-routes');
const twitterRoutes = require('./twitter/twitter-routes');
const lolRoutes = require('./lol/lol-routes');

const routes = [
  financeRoutes,
  wheatherRoutes,
  twitterRoutes,
  lolRoutes,
];

module.exports = routes;
