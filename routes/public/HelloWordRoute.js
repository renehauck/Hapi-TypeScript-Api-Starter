"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloWorldRoute {
    constructor(server) {
        this.server = server;
        this.initGet();
    }
    initGet() {
        this.server.route({
            method: 'GET',
            path: '/',
            config: { auth: false },
            handler: (request, reply) => {
                reply('Hello, world!');
            }
        });
    }
}
exports.HelloWorldRoute = HelloWorldRoute;
//# sourceMappingURL=HelloWordRoute.js.map