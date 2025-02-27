const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: process.env.PORT || 9000, // Vercel bakal tentuin port otomatis
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

const routes = require('./routes');
server.route(routes);

module.exports = async (req, res) => {
  await server.initialize();
  server.inject({
    method: req.method,
    url: req.url,
    payload: req.body,
    headers: req.headers,
  }).then((response) => {
    res.status(response.statusCode).send(response.result);
  });
};
