const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: process.env.PORT || 9000,
  host: process.env.HOST || '0.0.0.0',
  routes: {
    cors: {
      origin: ['*', 'https://bookshelf-2-0-git-main-kanzzs-projects.vercel.app/api/books'],
      credentials: true,
    },
  },
});

const routes = require('./routes');
server.route(routes);

module.exports = async (req, res) => {
  try {
    await server.initialize();
    const response = await server.inject({
      method: req.method,
      url: req.url,
      payload: req.body,
      headers: req.headers,
    });
    res.status(response.statusCode).send(response.result);
  } catch (error) {
    console.error('Error occurred:', error); // Log error to console
    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
};
