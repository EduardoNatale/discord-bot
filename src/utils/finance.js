const sendMessage = (data, channel) => {
  let message = '**Cotação**';
  const currencies = ['USD', 'EUR', 'GBP', 'ARS'];

  currencies.forEach((c) => {
    const current = data.results.currencies[c];
    message += `\n${current.name}: ${current.buy.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`;
  });

  channel.send(message);
};

module.exports = sendMessage;
