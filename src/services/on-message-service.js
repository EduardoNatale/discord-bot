const financeService = require('./finance-service');
const weatherService = require('./wheather-service');
const twitterService = require('./twitter-service');

global.discordClient.on('message', (msg) => {
  if (
    [
      'dolar',
      'dólar',
      'dollar',
      'cotacao',
      'cotação',
      'cotaçao',
      'cotacão',
    ].includes(msg.content.toLowerCase())
  ) {
    financeService.quote(msg.channel);
  } else if (['clima', 'tempo'].includes(msg.content.toLowerCase())) {
    weatherService.wheather(msg.channel, 'Ribeirão Preto');
  } else if (
    ['twiiter', 'timeline', 'blue bird', 'lol', 'twitter', 'twiter'].includes(
      msg.content.toLowerCase(),
    )
  ) {
    twitterService.timeline(msg.channel);
  }
});
