/* eslint-disable class-methods-use-this */
const { default: axios } = require('axios');
const sendMessage = require('../../utils/finance');

const getQuote = async (req, res) => {
  const channel = global.discordClient.channels.cache.get('812093017246531648');
  const url = `https://api.hgbrasil.com/finance?key=${process.env.hgkey}`;

  try {
    const result = await axios.get(url);
    if (result.status === 200) {
      sendMessage(result.data, channel);

      res.status(200).send({
        success: true,
        response: {
          message: 'Sucesso!',
        },
      });
    } else {
      channel.send('Algum problema ocorreu na api');

      res.status(result.status).send({
        success: false,
        response: {
          message: 'Falha!',
        },
      });
    }
  } catch (error) {
    channel.send(String(error || 'Algum erro ocorreu'));

    res.status(404).send({
      success: false,
      response: {
        message: 'Algum problema ocorreu!',
      },
    });
  }
};

module.exports = { getQuote };
