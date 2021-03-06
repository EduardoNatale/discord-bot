const Twitter = require('twitter');
const verifyToken = require('../../utils/token');

const apiKey = process.env.apikey;
const apiSecretKey = process.env.apikeysecret;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.accesstokensecret;

const client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret,
});

const params = { screen_name: 'LoLegendsBR', count: 1 };

const timeline = (req, res) => {
  if (verifyToken(req, res)) {
    return;
  }

  client.get(
    'statuses/user_timeline',
    params,
    (error, tweets) => {
      if (!error) {
        const channel = global.discordClient.channels.cache.find((c) => c.name.includes('chat'));

        channel.send(`https://twitter.com/i/web/status/${tweets[0].id_str}`);

        res.status(200).send({
          success: true,
          response: {
            message: 'Sucesso!',
          },
        });
      } else {
        res.status(404).send({
          success: false,
          response: {
            message: 'Falha!',
          },
        });
      }
    },
  );
};

module.exports = { timeline };
