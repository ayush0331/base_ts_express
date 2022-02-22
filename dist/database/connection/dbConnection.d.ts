import { ConnectionManager, Connection } from "typeorm";
export declare class dbConnection {
    static connectionManager: ConnectionManager;
    static connection: Connection;
    static connect: () => Promise<void>;
}
//# sourceMappingURL=dbConnection.d.ts.map