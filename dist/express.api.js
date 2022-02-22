"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApi = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const app_routing_1 = require("./router/app.routing");
const http_errors_1 = __importDefault(require("http-errors"));
const defaultErrorHandler_1 = require("./middleware/errorHandlers/defaultErrorHandler");
const morgan_1 = __importDefault(require("morgan"));
const appLogger_1 = require("./utils/logger/appLogger");
const dbConnection_1 = require("./database/connection/dbConnection");
class expressApi {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
        this.configure();
    }
    configure() {
        this.configureMiddleware();
        this.configureBaseRoute();
        this.configureRoutes();
        this.errorHandler();
    }
    configureMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("short"));
        appLogger_1.AppLogger.configureLogger();
    }
    configureBaseRoute() {
        this.app.use((request, response, next) => {
            if (request.url === "/") {
                response.json({ hello: "world" });
                return;
            }
            else {
                next();
            }
        });
        this.app.use(config_1.default.get("server.basePath"), this.router);
        new app_routing_1.AppRouting(this.router);
    }
    configureRoutes() {
        // this.app.use((request: Request, response: Response, next: NextFunction) => {
        //   next();
        // });
    }
    errorHandler() {
        this.app.use(() => {
            throw (0, http_errors_1.default)(404, "Route not found");
        });
        this.app.use(defaultErrorHandler_1.defaultErrorHandler);
    }
    async run() {
        const port = await config_1.default.get("server.port");
        await dbConnection_1.dbConnection.connect();
        const server = this.app.listen(port, () => {
            appLogger_1.AppLogger.info(config_1.default.util.getEnv("NODE_ENV"), `server listening on http://localhost:${port}`);
            server.on("error", this.onError);
        });
    }
    onError(error) {
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
exports.expressApi = expressApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZXhwcmVzcy5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esc0RBQThCO0FBQzlCLG9EQUE0QjtBQUM1QixzREFBa0Q7QUFDbEQsOERBQTBDO0FBQzFDLHdGQUFxRjtBQUNyRixvREFBNEI7QUFDNUIsd0RBQXFEO0FBQ3JELHFFQUFrRTtBQUVsRSxNQUFhLFVBQVU7SUFJckI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlCLHFCQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPO2FBQ1I7aUJBQU07Z0JBQ0wsSUFBSSxFQUFFLENBQUM7YUFDUjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSx3QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sZUFBZTtRQUNyQiwrRUFBK0U7UUFDL0UsWUFBWTtRQUNaLE1BQU07SUFDUixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRztRQUNkLE1BQU0sSUFBSSxHQUFXLE1BQU0sZ0JBQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSwyQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDeEMscUJBQVMsQ0FBQyxJQUFJLENBQ1osZ0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUM5Qix3Q0FBd0MsSUFBSSxFQUFFLENBQy9DLENBQUM7WUFDRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sT0FBTyxDQUFDLEtBQVU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzlCLE1BQU0sS0FBSyxDQUFDO1NBQ2I7UUFFRCxNQUFNLElBQUksR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFFeEUsdURBQXVEO1FBQ3ZELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksK0JBQStCLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRjtBQXBGRCxnQ0FvRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uLCBFcnJvclJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCJjb25maWdcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmcgfSBmcm9tIFwiLi9yb3V0ZXIvYXBwLnJvdXRpbmdcIjtcbmltcG9ydCBjcmVhdGVIdHRwRXJyb3IgZnJvbSBcImh0dHAtZXJyb3JzXCI7XG5pbXBvcnQgeyBkZWZhdWx0RXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4vbWlkZGxld2FyZS9lcnJvckhhbmRsZXJzL2RlZmF1bHRFcnJvckhhbmRsZXJcIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgQXBwTG9nZ2VyIH0gZnJvbSBcIi4vdXRpbHMvbG9nZ2VyL2FwcExvZ2dlclwiO1xuaW1wb3J0IHsgZGJDb25uZWN0aW9uIH0gZnJvbSBcIi4vZGF0YWJhc2UvY29ubmVjdGlvbi9kYkNvbm5lY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIGV4cHJlc3NBcGkge1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkV4cHJlc3M7XG4gIHByaXZhdGUgcm91dGVyOiBleHByZXNzLlJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLnJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5jb25maWd1cmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlKCkge1xuICAgIHRoaXMuY29uZmlndXJlTWlkZGxld2FyZSgpO1xuICAgIHRoaXMuY29uZmlndXJlQmFzZVJvdXRlKCk7XG4gICAgdGhpcy5jb25maWd1cmVSb3V0ZXMoKTtcbiAgICB0aGlzLmVycm9ySGFuZGxlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVNaWRkbGV3YXJlKCkge1xuICAgIHRoaXMuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKG1vcmdhbihcInNob3J0XCIpKTtcbiAgICBBcHBMb2dnZXIuY29uZmlndXJlTG9nZ2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUJhc2VSb3V0ZSgpIHtcbiAgICB0aGlzLmFwcC51c2UoKHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gICAgICBpZiAocmVxdWVzdC51cmwgPT09IFwiL1wiKSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oeyBoZWxsbzogXCJ3b3JsZFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hcHAudXNlKGNvbmZpZy5nZXQoXCJzZXJ2ZXIuYmFzZVBhdGhcIiksIHRoaXMucm91dGVyKTtcbiAgICBuZXcgQXBwUm91dGluZyh0aGlzLnJvdXRlcik7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcygpIHtcbiAgICAvLyB0aGlzLmFwcC51c2UoKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgLy8gICBuZXh0KCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBwcml2YXRlIGVycm9ySGFuZGxlcigpIHtcbiAgICB0aGlzLmFwcC51c2UoKCkgPT4ge1xuICAgICAgdGhyb3cgY3JlYXRlSHR0cEVycm9yKDQwNCwgXCJSb3V0ZSBub3QgZm91bmRcIik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcC51c2UoZGVmYXVsdEVycm9ySGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcnVuKCkge1xuICAgIGNvbnN0IHBvcnQ6IG51bWJlciA9IGF3YWl0IGNvbmZpZy5nZXQoXCJzZXJ2ZXIucG9ydFwiKTtcbiAgICBhd2FpdCBkYkNvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICBBcHBMb2dnZXIuaW5mbyhcbiAgICAgICAgY29uZmlnLnV0aWwuZ2V0RW52KFwiTk9ERV9FTlZcIiksXG4gICAgICAgIGBzZXJ2ZXIgbGlzdGVuaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWBcbiAgICAgICk7XG4gICAgICBzZXJ2ZXIub24oXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zdCBwb3J0ID0gZXJyb3IucG9ydDtcbiAgICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gXCJsaXN0ZW5cIikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSBcInN0cmluZ1wiID8gYFBpcGUgJHtwb3J0fWAgOiBgUG9ydCAke3BvcnR9YDtcblxuICAgIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICAgIGNhc2UgXCJFQUNDRVNcIjpcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRUFERFJJTlVTRVwiOlxuICAgICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==