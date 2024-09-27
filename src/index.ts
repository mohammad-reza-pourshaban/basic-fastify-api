import * as dotenv from "dotenv";
dotenv.config({});
import fastify, { FastifyInstance } from "fastify";
import * as http from "http";
import * as redis from "./helpers/redis";
import routes from "./routes";
import { data } from "./data";
import "./jobs/cron"

const PORT = Number(process.env.BASIC_API_PORT) || 6000;

(BigInt.prototype as any).toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

const startServer = async () => {
  try {

    const app: FastifyInstance<
      http.Server,
      http.IncomingMessage,
      http.ServerResponse
    > = fastify({
      // logger: true, 
    });

    app.register(require("@fastify/formbody"));
    app.register(require("@fastify/cors"), { origin: "*" });
    app.register(require("@fastify/helmet"), { global: false });

    routes(app);
    app.setErrorHandler((error, request, reply) => {
      console.error('Error handler:', error);
      reply.status(500).send({ error: 'Internal Server Error' });
    });

    app.ready(async () => {
      try {

        await redis.client.connect();
        await data();
        await app.listen({ port: PORT, host: '0.0.0.0' });

        console.log(`************ Server running on port ${PORT} ************`);
      } catch (startupError) {
        console.error('Error during startup:', startupError);
        process.exit(1);
      }

    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
