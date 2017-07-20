import { Server } from "hapi"

export class HelloWorldRoute {
    server: Server

    constructor(server: Server) {
        this.server = server;
        this.initGet();
    }

    private initGet() {
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