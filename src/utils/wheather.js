const sendMessage = (data, channel) => {
  const message = `**Clima**\n${data.results.city_name}\n${data.results.description}\n${data.results.temp}°C`;

  channel.send(message);
};

module.exports = sendMessage;
