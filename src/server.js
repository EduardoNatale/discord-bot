require('./discord');
const app = require('express')();
const routes = require('./core/routes');

// Building routes
routes.forEach((route) => app.use(route));

// Server config
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
