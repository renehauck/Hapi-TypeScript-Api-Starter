"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteManager_1 = require("./routes/RouteManager");
const Hapi = require("hapi");
const hapiAuthJwt2 = require("hapi-auth-jwt2");
const AuthenticationManager_1 = require("./authentication/AuthenticationManager");
const key = 'mySuperSecretKey'; // Never Share your secret key
const server = new Hapi.Server();
const authManager = new AuthenticationManager_1.AuthenticationManager();
server.connection({ port: 3000 });
server.register(hapiAuthJwt2, (err) => {
    if (err) {
        console.log(err);
    }
    server.auth.strategy('jwt', 'jwt', {
        key: key,
        validateFunc: authManager.validateFunction,
        verifyOptions: { algorithms: ['HS256'] }
    });
    server.auth.default('jwt');
    server.start((err) => {
        if (err) {
            throw err;
        }
        new RouteManager_1.RouteManager(server, key);
        console.log(`Server running at: ${server.info.uri}`);
    });
});
//# sourceMappingURL=index.js.map