"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const path_1 = __importDefault(require("path"));
const winston_1 = require("winston");
const fs_1 = __importDefault(require("fs"));
require("winston-daily-rotate-file");
class AppLogger {
    static CreateLogFolderIfNotExists() {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        if (!fs_1.default.existsSync(this.logDirectory)) {
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            fs_1.default.mkdirSync(this.logDirectory);
        }
    }
    static SetLogger() {
        const logFormat = winston_1.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} ${level}: ${message}`;
        });
        this.logger = (0, winston_1.createLogger)({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.json(), winston_1.format.timestamp(), logFormat),
            transports: [
                new winston_1.transports.Console(),
                new winston_1.transports.DailyRotateFile({
                    frequency: "3h",
                    filename: path_1.default.join(AppLogger.logDirectory, "starter-%DATE%.log"),
                    datePattern: "YYYY-MM-DD",
                    maxSize: "10m",
                    level: "verbose",
                }),
            ],
            exitOnError: false,
        });
    }
    static configureLogger() {
        this.CreateLogFolderIfNotExists();
        this.SetLogger();
    }
    static GetValue(name, value) {
        if (typeof value === "string") {
            return `${name}-  ${value}`;
        }
        else {
            return `${name}-${JSON.stringify(value)}`;
        }
    }
    static debug(name, value) {
        this.logger.log("debug", this.GetValue(name, value));
    }
    static error(name, value) {
        this.logger.log("error", this.GetValue(name, value));
    }
    static warn(name, value) {
        this.logger.log("warn", this.GetValue(name, value));
    }
    static info(name, value) {
        this.logger.log("info", this.GetValue(name, value));
    }
}
exports.AppLogger = AppLogger;
AppLogger.logDirectory = path_1.default.join(process.cwd(), "logs");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci9hcHBMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLHFDQUFtRTtBQUNuRSw0Q0FBb0I7QUFDcEIscUNBQW1DO0FBRW5DLE1BQWEsU0FBUztJQUlaLE1BQU0sQ0FBQywwQkFBMEI7UUFDdkMsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNyQyxtRUFBbUU7WUFDbkUsWUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRU8sTUFBTSxDQUFDLFNBQVM7UUFDdEIsTUFBTSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtZQUNoRSxPQUFPLEdBQUcsU0FBUyxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSxzQkFBWSxFQUFDO1lBQ3pCLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FDcEIsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsRUFDYixnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixTQUFTLENBQ1Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxvQkFBVSxDQUFDLGVBQWUsQ0FBQztvQkFDN0IsU0FBUyxFQUFFLElBQUk7b0JBQ2YsUUFBUSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDakUsV0FBVyxFQUFFLFlBQVk7b0JBQ3pCLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWU7UUFDM0IsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVksRUFBRSxLQUFVO1FBQzlDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxJQUFJLE1BQU0sS0FBSyxFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7QUFoRUgsOEJBaUVDO0FBL0RnQixzQkFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgdHJhbnNwb3J0cywgTG9nZ2VyLCBmb3JtYXQgfSBmcm9tIFwid2luc3RvblwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IFwid2luc3Rvbi1kYWlseS1yb3RhdGUtZmlsZVwiO1xuXG5leHBvcnQgY2xhc3MgQXBwTG9nZ2VyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgbG9nZ2VyOiBMb2dnZXI7XG4gIHByaXZhdGUgc3RhdGljIGxvZ0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImxvZ3NcIik7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgQ3JlYXRlTG9nRm9sZGVySWZOb3RFeGlzdHMoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1ub24tbGl0ZXJhbC1mcy1maWxlbmFtZVxuICAgIGlmICghZnMuZXhpc3RzU3luYyh0aGlzLmxvZ0RpcmVjdG9yeSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWN1cml0eS9kZXRlY3Qtbm9uLWxpdGVyYWwtZnMtZmlsZW5hbWVcbiAgICAgIGZzLm1rZGlyU3luYyh0aGlzLmxvZ0RpcmVjdG9yeSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgU2V0TG9nZ2VyKCkge1xuICAgIGNvbnN0IGxvZ0Zvcm1hdCA9IGZvcm1hdC5wcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIHRpbWVzdGFtcCB9KSA9PiB7XG4gICAgICByZXR1cm4gYCR7dGltZXN0YW1wfSAke2xldmVsfTogJHttZXNzYWdlfWA7XG4gICAgfSk7XG4gICAgdGhpcy5sb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICAgICAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICAgICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgIGZvcm1hdC5qc29uKCksXG4gICAgICAgIGZvcm1hdC50aW1lc3RhbXAoKSxcbiAgICAgICAgbG9nRm9ybWF0XG4gICAgICApLFxuICAgICAgdHJhbnNwb3J0czogW1xuICAgICAgICBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKCksXG4gICAgICAgIG5ldyB0cmFuc3BvcnRzLkRhaWx5Um90YXRlRmlsZSh7XG4gICAgICAgICAgZnJlcXVlbmN5OiBcIjNoXCIsXG4gICAgICAgICAgZmlsZW5hbWU6IHBhdGguam9pbihBcHBMb2dnZXIubG9nRGlyZWN0b3J5LCBcInN0YXJ0ZXItJURBVEUlLmxvZ1wiKSxcbiAgICAgICAgICBkYXRlUGF0dGVybjogXCJZWVlZLU1NLUREXCIsXG4gICAgICAgICAgbWF4U2l6ZTogXCIxMG1cIixcbiAgICAgICAgICBsZXZlbDogXCJ2ZXJib3NlXCIsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlTG9nZ2VyKCkge1xuICAgIHRoaXMuQ3JlYXRlTG9nRm9sZGVySWZOb3RFeGlzdHMoKTtcbiAgICB0aGlzLlNldExvZ2dlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgR2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGAke25hbWV9LSAgJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0tJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlYnVnKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMubG9nZ2VyLmxvZyhcImRlYnVnXCIsIHRoaXMuR2V0VmFsdWUobmFtZSwgdmFsdWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3IobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKFwiZXJyb3JcIiwgdGhpcy5HZXRWYWx1ZShuYW1lLCB2YWx1ZSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB3YXJuKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMubG9nZ2VyLmxvZyhcIndhcm5cIiwgdGhpcy5HZXRWYWx1ZShuYW1lLCB2YWx1ZSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMubG9nZ2VyLmxvZyhcImluZm9cIiwgdGhpcy5HZXRWYWx1ZShuYW1lLCB2YWx1ZSkpO1xuICB9XG59XG4iXX0=