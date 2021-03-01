const financeController = require("./financeController");
const twitterController = require("./twitterController");
const wheatherController = require("./wheatherController");

module.exports = (client) => {
  client.on("message", (msg) => {
    if (["dolar", "dólar", "dollar"].includes(msg.content.toLowerCase())) {
      financeController.quoteRequestByDiscord(msg.channel);
    } else if (
      ["twiiter", "timeline", "blue bird", "lol", "twitter", "twiter"].includes(
        msg.content.toLowerCase()
      )
    ) {
      twitterController.timelineLolByDiscord(msg.channel);
    } else if (["clima", "tempo"].includes(msg.content.toLowerCase())) {
      wheatherController.todayByDiscord(msg.channel, "Franca");
    }
  });
};
