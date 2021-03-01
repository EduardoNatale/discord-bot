const request = require("request");
require("dotenv/config");

const hgKey = process.env.hgkey;

let sendMessage = (body, channel) => {
  const json = JSON.parse(body);
  let message = `**Clima**\n${json.results.city_name}\n${json.results.description}\n${json.results.temp}°C`;

  channel.send(message);
};

exports.todayByApi = (discordClient) => {
  return (req, res, next) => {
    request.get(
      `https://api.hgbrasil.com/weather?key=${hgKey}&city_name=${req.params.city}`,
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
                body: JSON.parse(response.body),
              },
            });
          } else {
            res.status(response.statusCode).send({
              sucess: false,
              response: {
                message: error || "Algum problema ocorreu!",
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

exports.todayByDiscord = (channel, city) => {
  request.get(
    `https://api.hgbrasil.com/weather?key=${hgKey}&city_name=${city}`,
    (error, response, body) => {
      if (response) {
        if (response.statusCode == 200) {
          sendMessage(response.body, channel);
        } else channel.send("Algum problema ocorreu na api");
      } else channel.send("Algum problema ocorreu na api");
    }
  );
};
