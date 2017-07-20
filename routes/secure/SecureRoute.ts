import { Server } from 'hapi';

export class SecureRoute {
    server: Server

    constructor(server: Server) {
        this.server = server;
        this.initGet();
    }

    private initGet() {
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