import { getConnectionManager, ConnectionManager, Connection } from "typeorm";
import config from "config";

export class dbConnection {
  static connectionManager = getConnectionManager();
  static connection = this.connectionManager.create(config.get("dbConfig"));

  public static connect = async () => {
    this.connection.connect();
  };
}
