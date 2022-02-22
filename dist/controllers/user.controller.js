"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
class UserController {
    constructor() {
        this.route = "/users";
        this.router = (0, express_1.Router)();
        this.router.get("/", this.getUsers);
    }
    async getUsers(request, response) {
        response.json({ message: "hi" });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0U7QUFHbEUsTUFBYSxjQUFjO0lBR3pCO1FBRk8sVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixXQUFNLEdBQVcsSUFBQSxnQkFBTSxHQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFnQixFQUFFLFFBQWtCO1FBRXhELFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFYRCx3Q0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZSB9IGZyb20gXCIuLi9AdHlwZXMvYXBwUm91dGVyL2FwcC1yb3V0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgQXBwUm91dGUge1xuICBwdWJsaWMgcm91dGUgPSBcIi91c2Vyc1wiO1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KFwiL1wiLCB0aGlzLmdldFVzZXJzKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRVc2VycyhyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIFxuICAgIHJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcImhpXCIgfSk7XG4gIH1cbn1cbiJdfQ==