const { CronJob } = require('cron');
const twitterService = require('../services/twitter-service');

// segundos minutos horas
// Will send message at 9 am
(new CronJob('00 00 12 * * *', (() => {
  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('league-of-legends'));
  twitterService.timeline(channel);
}))).start();

// Will send message at 6 pm
(new CronJob('00 00 21 * * *', (() => {
  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('league-of-legends'));
  twitterService.timeline(channel);
}))).start();
