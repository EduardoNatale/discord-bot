const Twitter = require("twitter");
require("dotenv/config");

const apiKey = process.env.apikey;
const apiSecretKey = process.env.apikeysecret;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.accesstokensecret;

var client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret,
});

var params = { screen_name: "LoLegendsBR", count: 1 };

exports.timelineLolByApi = (discordClient) => {
  return (req, res, next) => {
    client.get(
      "statuses/user_timeline",
      params,
      function (error, tweets, response) {
        if (!error) {
          const channel = discordClient.channels.cache.get(
            "812093017246531648"
          );

          channel.send(`https://twitter.com/i/web/status/${tweets[0].id_str}`);

          return res.status(200).send({
            sucess: true,
            response: {
              message: "Sucesso!",
            },
          });
        }
      }
    );
  };
};

exports.timelineLolByDiscord = (channel) => {
  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error)
        channel.send(`https://twitter.com/i/web/status/${tweets[0].id_str}`);
      else channel.send("Algum problema ocorreu!");
    }
  );
};
