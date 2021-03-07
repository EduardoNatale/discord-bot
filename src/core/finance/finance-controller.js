/* eslint-disable class-methods-use-this */
const { default: axios } = require('axios');
const sendMessage = require('../../utils/finance');
const verifyToken = require('../../utils/token');

const getQuote = async (req, res) => {
  if (verifyToken(req, res)) {
    return;
  }

  const channel = global.discordClient.channels.cache.find((c) => c.name.includes('chamar-bots'));
  const url = `https://api.hgbrasil.com/finance?key=${process.env.hgkey}`;

  try {
    const result = await axios.get(url);

    if (result.status === 200) {
      sendMessage(result.data, channel);

      res.status(200).send({
        success: true,
        response: {
          message: 'Sucesso!',
          data: result.data,
        },
      });
    } else {
      channel.send('Algum problema ocorreu na api');

      res.status(result.status).send({
        success: false,
        response: {
          message: 'Falha!',
          data: result.data,
        },
      });
    }
  } catch (error) {
    channel.send(String(error || 'Algum erro ocorreu'));

    res.status(404).send({
      success: false,
      response: {
        message: 'Algum problema ocorreu!',
        data: error,
      },
    });
  }
};

module.exports = { getQuote };
