"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("config"));
class dbConnection {
}
exports.dbConnection = dbConnection;
_a = dbConnection;
dbConnection.connectionManager = (0, typeorm_1.getConnectionManager)();
dbConnection.connection = _a.connectionManager.create(config_1.default.get("dbConfig"));
dbConnection.connect = async () => {
    _a.connection.connect();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJDb25uZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL2Nvbm5lY3Rpb24vZGJDb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQ0FBOEU7QUFDOUUsb0RBQTRCO0FBRTVCLE1BQWEsWUFBWTs7QUFBekIsb0NBT0M7O0FBTlEsOEJBQWlCLEdBQUcsSUFBQSw4QkFBb0IsR0FBRSxDQUFDO0FBQzNDLHVCQUFVLEdBQUcsRUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTVELG9CQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDakMsRUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1QixDQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb25uZWN0aW9uTWFuYWdlciwgQ29ubmVjdGlvbk1hbmFnZXIsIENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBkYkNvbm5lY3Rpb24ge1xuICBzdGF0aWMgY29ubmVjdGlvbk1hbmFnZXIgPSBnZXRDb25uZWN0aW9uTWFuYWdlcigpO1xuICBzdGF0aWMgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuY3JlYXRlKGNvbmZpZy5nZXQoXCJkYkNvbmZpZ1wiKSk7XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gIH07XG59XG4iXX0=