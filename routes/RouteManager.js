"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecureRoute_1 = require("./secure/SecureRoute");
const HelloWordRoute_1 = require("./public/HelloWordRoute");
const LoginRoute_1 = require("./secure/LoginRoute");
class RouteManager {
    constructor(server, key) {
        this.server = server;
        this.initPublicRoutes();
        this.initSecureRoutes(key);
    }
    initPublicRoutes() {
        new HelloWordRoute_1.HelloWorldRoute(this.server);
    }
    initSecureRoutes(key) {
        new LoginRoute_1.LoginRoute(this.server, key);
        new SecureRoute_1.SecureRoute(this.server);
    }
}
exports.RouteManager = RouteManager;
//# sourceMappingURL=RouteManager.js.map