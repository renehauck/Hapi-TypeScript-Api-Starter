import { RouteManager } from './routes/RouteManager';
import * as Hapi from "hapi"
import * as hapiAuthJwt2 from "hapi-auth-jwt2"
import { AuthenticationManager } from "./authentication/AuthenticationManager";

const key = 'mySuperSecretKey'          // Never Share your secret key


const server = new Hapi.Server();
const authManager = new AuthenticationManager();
server.connection({ port: 3000 });
server.register(hapiAuthJwt2, (err) => {
    if (err) {
        console.log(err);
    }

    server.auth.strategy('jwt', 'jwt',
        {
            key: key,
            validateFunc: authManager.validateFunction,
            verifyOptions: { algorithms: ['HS256'] }
        });

    server.auth.default('jwt');

    server.start((err) => {
        if (err) {
            throw err;
        }

        new RouteManager(server, key);


        console.log(`Server running at: ${server.info.uri}`);
    });
})


