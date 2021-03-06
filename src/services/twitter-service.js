const Twitter = require('twitter');

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

const timeline = (channel) => {
  client.get(
    'statuses/user_timeline',
    params,
    (error, tweets) => {
      if (!error) { channel.send(`https://twitter.com/i/web/status/${tweets[0].id_str}`); } else channel.send('Algum problema ocorreu!');
    },
  );
};

module.exports = { timeline };
