const { CronJob } = require('cron');
const twitterService = require('../services/twitter-service');

// segundos minutos horas
(new CronJob('00 00 12 * * *', (() => {
  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('twitter'));
  twitterService.timeline(channel);
}))).start();
