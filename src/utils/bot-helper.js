const Discord = require('discord.js');

const twitter = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle('Como usar?')
  .setAuthor(
    'Twitter',
    'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
  )
  .addFields(
    { name: '-twitter', value: 'Na frente digite o @ do twitter que deseja ver a última postagem.' },
  );

const quote = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle('Como usar?')
  .addFields(
    { name: '-cotacao', value: 'Digite para ver a cotação de algumas moedas.' },
  );

const wheather = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle('Como usar?')
  .addFields(
    { name: '-clima', value: 'Digite para ver o clima de São Paulo.' },
  );

const embeds = [
  twitter,
  quote,
  wheather,
];

const sendEmbed = (channel, key) => {
  if (key === 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < embeds.length; i++) {
      channel.send(embeds[i]);
    }
  } else {
    channel.send(embeds[key - 1]);
  }
};

module.exports = sendEmbed;
