import { expressApi } from "./express.api";

const api = new expressApi();

api.run();

const app = api.app;
export { app };
