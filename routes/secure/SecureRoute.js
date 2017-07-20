"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecureRoute {
    constructor(server) {
        this.server = server;
        this.initGet();
    }
    initGet() {
        this.server.route({
            method: 'GET',
            config: { auth: 'jwt' },
            path: '/secure',
            handler: (request, reply) => {
                reply('Hello, (secure) world!');
            }
        });
    }
}
exports.SecureRoute = SecureRoute;
//# sourceMappingURL=SecureRoute.js.map