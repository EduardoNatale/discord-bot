const request = require("request");
require("dotenv/config");

const hgKey = process.env.hgkey;

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

            const json = JSON.parse(response.body);
            let message = `**Clima**\n${json.results.city_name}\n${json.results.description}\n${json.results.temp}°C`;

            channel.send(message);

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
          const json = JSON.parse(response.body);
          let message = `**Clima**\n${json.results.city_name}\n${json.results.description}\n${json.results.temp}°C`;

          channel.send(message);
        } else {
        }
      } else {
      }
    }
  );
};
