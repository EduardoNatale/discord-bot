const router = require("express").Router();
const controller = require("../controllers/wheatherController");

module.exports = (discordClient) => {
  router.get("/today/:city", controller.todayByApi(discordClient));

  return router;
};
