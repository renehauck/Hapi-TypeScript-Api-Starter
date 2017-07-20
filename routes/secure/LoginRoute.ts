import { AuthenticationManager, ITokenPayLoad } from './../../authentication/AuthenticationManager';
import { Server } from 'hapi';
import * as Joi from "joi"
import * as JWT from "jsonwebtoken"
import * as Boom from "boom"

export interface ILoginData {
    email: string,
    password: string
}

export class LoginRoute {
    server: Server
    key: string

    constructor(server: Server, key: string) {
        this.server = server;
        this.initLoginAdminPostRoute();
        this.key = key;
    }

    private initLoginAdminPostRoute() {
        this.server.route({
            method: "POST",
            path: "/login",
            config: {
                auth: false,
                validate: {
                    payload: {
                        password: Joi.string().min(4).max(200).required(),
                        email: Joi.string().email().required()
                    }
                },
                handler: async (request, reply) => {
                    const loginData = <ILoginData>request.payload;
                    const user = AuthenticationManager.getUserFromDB();
                    const isPWDOk = await AuthenticationManager.checkPWD(loginData.password, user.password);
                    if (isPWDOk) {
                        const tokenPayload: ITokenPayLoad = { userId: user.id };
                        return reply(JWT.sign(tokenPayload, this.key))
                    }
                    else
                        return reply(Boom.unauthorized());
                }
            }
        })
    }
}