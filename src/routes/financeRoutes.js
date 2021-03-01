const router = require("express").Router();
const controller = require("../controllers/financeController");

module.exports = (discordClient) => {
  router.get("/quote", controller.quoteRequestByApi(discordClient));

  return router;
};
