const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"], // Izinkan semua domain
        headers: ["Accept", "Content-Type", "Authorization"],
        exposedHeaders: ["Authorization"],
        additionalHeaders: ["X-Requested-With"],
        credentials: true, // Jika butuh cookies/credentials
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
