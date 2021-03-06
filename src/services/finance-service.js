const { default: axios } = require('axios');
const sendMessage = require('../utils/finance');

const quote = async (channel) => {
  const url = `https://api.hgbrasil.com/finance?key=${process.env.hgkey}`;

  try {
    const result = await axios.get(url);

    if (result.status === 200) sendMessage(result.data, channel);
    else channel.send('Algum problema ocorreu na api');
  } catch (error) {
    channel.send(String(error || 'Algum erro aconteceu!'));
  }
};

module.exports = { quote };
