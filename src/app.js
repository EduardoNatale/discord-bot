const express = require("express");
const app = express();
const discordClient = require("./discordConfig");

const twitterRoutes = require("./routes/twitterRoutes");
const financeRoutes = require("./routes/financeRoutes");
const wheatherRoutes = require("./routes/wheatherRoutes");

app.use("/twitter", twitterRoutes(discordClient));
app.use("/finance", financeRoutes(discordClient));
app.use("/wheather", wheatherRoutes(discordClient));

module.exports = app;
