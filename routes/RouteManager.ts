import { SecureRoute } from './secure/SecureRoute';
import { Server } from 'hapi';

import { HelloWorldRoute } from './public/HelloWordRoute';
import { LoginRoute } from "./secure/LoginRoute";
export class RouteManager {
    private server: Server;
    constructor(server: Server, key: string) {
        this.server = server;
        this.initPublicRoutes();
        this.initSecureRoutes(key);
    }

    private initPublicRoutes() {
        new HelloWorldRoute(this.server);
    }
    private initSecureRoutes(key: string) {
        new LoginRoute(this.server, key);
        new SecureRoute(this.server);
    }
}