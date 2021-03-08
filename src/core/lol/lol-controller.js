const Discord = require('discord.js');
// const cheerio = require('cheerio');
const axios = require('axios');
const verifyToken = require('../../utils/token');

const first = new Discord.MessageEmbed()
  .setColor('#6F2AF8')
  .setTitle('TIND PÉ NA AREIA')
  .setURL('https://www.leagueofgraphs.com/pt/summoner/br/TIND+P%C3%89+NA+AREIA')
  .setAuthor(
    'POROFESSOR',
    'https://cdn2.porofessor.gg/img/porofessor-200.png',
    'https://www.leagueofgraphs.com/pt/summoner/br/TIND+P%C3%89+NA+AREIA',
  )
  .setThumbnail(
    'https://lolg-cdn.porofessor.gg/img/summonerIcons/11.4/64/3550.png',
  );

const second = new Discord.MessageEmbed()
  .setColor('#6F2AF8')
  .setTitle('Ranqueada Solo/duo')
  .addField('Silver 2', '0 LP / 9V 11L', true)
  .setThumbnail('https://cdn.lolalytics.com/op/img/emblems/silver.png');

const third = new Discord.MessageEmbed()
  .setColor('#6F2AF8')
  .setTitle('Ranqueada Flex')
  .addField('Gold 3', '48 LP / 54V 40L', true)
  .setThumbnail('https://cdn.lolalytics.com/op/img/emblems/gold.png');

const stats = async (req, res) => {
  if (verifyToken(req, res)) {
    return;
  }

  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('chat'));

  try {
    const url = `https://lolprofile.net/pt/summoner/br/${encodeURIComponent(
      req.params.user,
    )}`;
    const result = await axios.get(url);

    if (result.status === 200) {
      channel.send(first);
      channel.send(second);
      channel.send(third);
      res.status(200).send({
        success: true,
        response: {
          message: result.data,
        },
      });
    } else {
      res.status(result.status).send({
        success: false,
        response: {
          message: 'err',
        },
      });
    }
  } catch (error) {
    res.status(404).send({
      success: false,
      response: {
        message: error,
      },
    });
  }
};

module.exports = { stats };
