import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import express from "express";
import config from "config";
import { AppRouting } from "./router/app.routing";
import createHttpError from "http-errors";
import { defaultErrorHandler } from "./middleware/errorHandlers/defaultErrorHandler";
import morgan from "morgan";
import { AppLogger } from "./utils/logger/appLogger";
import { dbConnection } from "./database/connection/dbConnection";

export class expressApi {
  public app: express.Express;
  private router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.configure();
  }

  private configure() {
    this.configureMiddleware();
    this.configureBaseRoute();
    this.configureRoutes();
    this.errorHandler();
  }

  private configureMiddleware() {
    this.app.use(express.json());
    this.app.use(morgan("short"));
    AppLogger.configureLogger();
  }

  private configureBaseRoute() {
    this.app.use((request, response, next) => {
      if (request.url === "/") {
        response.json({ hello: "world" });
        return;
      } else {
        next();
      }
    });
    this.app.use(config.get("server.basePath"), this.router);
    new AppRouting(this.router);
  }

  private configureRoutes() {
    // this.app.use((request: Request, response: Response, next: NextFunction) => {
    //   next();
    // });
  }

  private errorHandler() {
    this.app.use(() => {
      throw createHttpError(404, "Route not found");
    });

    this.app.use(defaultErrorHandler);
  }

  public async run() {
    const port: number = await config.get("server.port");
    await dbConnection.connect();
    const server = this.app.listen(port, () => {
      AppLogger.info(
        config.util.getEnv("NODE_ENV"),
        `server listening on http://localhost:${port}`
      );
      server.on("error", this.onError);
    });
  }

  private onError(error: any) {
    const port = error.port;
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
}
