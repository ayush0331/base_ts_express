import "winston-daily-rotate-file";
export declare class AppLogger {
    private static logger;
    private static logDirectory;
    private static CreateLogFolderIfNotExists;
    private static SetLogger;
    static configureLogger(): void;
    private static GetValue;
    static debug(name: string, value: any): void;
    static error(name: string, value: any): void;
    static warn(name: string, value: any): void;
    static info(name: string, value: any): void;
}
//# sourceMappingURL=appLogger.d.ts.map