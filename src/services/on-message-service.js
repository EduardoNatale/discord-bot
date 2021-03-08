const financeService = require('./finance-service');
const weatherService = require('./wheather-service');
const twitterService = require('./twitter-service');
const banService = require('./ban-service');
const helper = require('../utils/bot-helper');

global.discordClient.on('message', (msg) => {
  // Para caso o bot mande mensagem para ele mesmo, não caia nessa condição
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();

    if (text.includes('-ajuda')) {
      helper(msg.channel, 0);
    } else if (text.includes('-twitter')) {
      const rText = text.replace('-twitter', '').trim();

      if (rText) {
        twitterService.timeline(msg.channel, rText);
      } else {
        helper(msg.channel, 1);
      }
    } else if (text.includes('-clima')) {
      weatherService.wheather(msg.channel, 'São Paulo');
    } else if (text.includes('-cotacao')) {
      financeService.quote(msg.channel);
    } else {
      banService(msg);
    }
  }
});
