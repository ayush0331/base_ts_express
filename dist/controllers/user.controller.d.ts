import { Router, Request, Response } from "express";
import { AppRoute } from "../@types/appRouter/app-router";
export declare class UserController implements AppRoute {
    route: string;
    router: Router;
    constructor();
    getUsers(request: Request, response: Response): Promise<any>;
}
//# sourceMappingURL=user.controller.d.ts.map