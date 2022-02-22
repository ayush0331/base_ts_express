"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouting = void 0;
const user_controller_1 = require("../controllers/user.controller");
class AppRouting {
    constructor(route) {
        this.route = route;
        this.route = route;
        this.configure();
    }
    configure() {
        // Add the routing classes.
        this.addRoute(new user_controller_1.UserController());
    }
    addRoute(appRoute) {
        this.route.use(appRoute.route, appRoute.router);
    }
}
exports.AppRouting = AppRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2FwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG9FQUFnRTtBQUVoRSxNQUFhLFVBQVU7SUFDckIsWUFBb0IsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDTSxTQUFTO1FBQ2QsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxnQ0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ08sUUFBUSxDQUFDLFFBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IEFwcFJvdXRlIH0gZnJvbSBcIi4uL0B0eXBlcy9hcHBSb3V0ZXIvYXBwLXJvdXRlclwiO1xuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gIH1cbiAgcHVibGljIGNvbmZpZ3VyZSgpIHtcbiAgICAvLyBBZGQgdGhlIHJvdXRpbmcgY2xhc3Nlcy5cbiAgICB0aGlzLmFkZFJvdXRlKG5ldyBVc2VyQ29udHJvbGxlcigpKTtcbiAgfVxuICBwcml2YXRlIGFkZFJvdXRlKGFwcFJvdXRlOiBBcHBSb3V0ZSkge1xuICAgIHRoaXMucm91dGUudXNlKGFwcFJvdXRlLnJvdXRlLCBhcHBSb3V0ZS5yb3V0ZXIpO1xuICB9XG59XG4iXX0=