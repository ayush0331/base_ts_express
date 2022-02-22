import { Router, Request, Response, NextFunction } from "express";
import { AppRoute } from "../@types/appRouter/app-router";

export class UserController implements AppRoute {
  public route = "/users";
  public router: Router = Router();
  constructor() {
    this.router.get("/", this.getUsers);
  }

  public async getUsers(request: Request, response: Response): Promise<any> {
    
    response.json({ message: "hi" });
  }
}
