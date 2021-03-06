const { default: axios } = require('axios');
const sendMessage = require('../utils/wheather');

const wheather = async (channel, city) => {
  const url = `https://api.hgbrasil.com/weather?key=${process.env.hgkey}&city_name=${encodeURIComponent(
    city,
  )}`;

  try {
    const result = await axios.get(url);

    if (result.status === 200) sendMessage(result.data, channel);
    else channel.send('Uma falha ocorreu!');
  } catch (error) {
    channel.send(String(error || 'Algum erro ocorreu'));
  }
};

module.exports = { wheather };
