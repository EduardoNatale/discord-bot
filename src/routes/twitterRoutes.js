const router = require("express").Router();
const controller = require("../controllers/twitterController");

module.exports = (discordClient) => {
  router.get("/timeline", controller.timelineLolByApi(discordClient));

  return router;
};
