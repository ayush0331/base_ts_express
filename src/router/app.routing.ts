import { Router } from "express";
import { AppRoute } from "../@types/appRouter/app-router";
import { UserController } from "../controllers/user.controller";

export class AppRouting {
  constructor(private route: Router) {
    this.route = route;
    this.configure();
  }
  public configure() {
    // Add the routing classes.
    this.addRoute(new UserController());
  }
  private addRoute(appRoute: AppRoute) {
    this.route.use(appRoute.route, appRoute.router);
  }
}
