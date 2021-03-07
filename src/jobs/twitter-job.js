const { CronJob } = require('cron');
const twitterService = require('../services/twitter-service');

// segundos minutos horas
(new CronJob('00 00 06 * * *', (() => {
  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('twitter'));
  twitterService.timeline(channel);
}))).start();

(new CronJob('00 00 14 * * *', (() => {
  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('twitter'));
  twitterService.timeline(channel);
}))).start();
