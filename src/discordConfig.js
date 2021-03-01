const client = require("./controllers/botController");

const onReady = require("./controllers/onReadyController");
const onMessage = require("./controllers/onMessageController");
const welcome = require("./controllers/welcomeController");

onReady(client);
onMessage(client);
welcome(client);

module.exports = client;
