const request = require("request");
require("dotenv/config");

const hgKey = process.env.hgkey;

let sendMessage = (body, channel) => {
  const json = JSON.parse(body);
  let message = "**Cotação**";
  let currencies = ["USD", "EUR", "GBP", "ARS"];

  currencies.forEach((c) => {
    let current = json.results.currencies[c];
    message += `\n${current.name}: ${current.buy.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
  });

  channel.send(message);
};

exports.quoteRequestByApi = (discordClient) => {
  return (req, res, next) => {
    request(
      `https://api.hgbrasil.com/finance?key=${hgKey}`,
      (error, response, body) => {
        if (response) {
          if (response.statusCode == 200) {
            const channel = discordClient.channels.cache.get(
              "812093017246531648"
            );

            sendMessage(response.body, channel);

            res.status(200).send({
              sucess: true,
              response: {
                message: "Sucesso!",
              },
            });
          } else {
            res.status(response.statusCode).send({
              sucess: false,
              response: {
                message: "Algum problema ocorreu!",
              },
            });
          }
        } else {
          res.status(404).send({
            sucess: false,
            response: {
              message: "Algum problema ocorreu!",
            },
          });
        }
      }
    );
  };
};

exports.quoteRequestByDiscord = (channel) => {
  request(
    `https://api.hgbrasil.com/finance?key=${hgKey}`,
    (error, response, body) => {
      if (response) {
        if (response.statusCode == 200) {
          sendMessage(response.body, channel);
        } else channel.send("Algum problema ocorreu na api");
      } else channel.send("Algum problema ocorreu na api");
    }
  );
};
