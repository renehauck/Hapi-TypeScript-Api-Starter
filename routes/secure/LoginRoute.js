"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationManager_1 = require("./../../authentication/AuthenticationManager");
const Joi = require("joi");
const JWT = require("jsonwebtoken");
const Boom = require("boom");
class LoginRoute {
    constructor(server, key) {
        this.server = server;
        this.initLoginAdminPostRoute();
        this.key = key;
    }
    initLoginAdminPostRoute() {
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
                handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
                    const loginData = request.payload;
                    const user = AuthenticationManager_1.AuthenticationManager.getUserFromDB();
                    const isPWDOk = yield AuthenticationManager_1.AuthenticationManager.checkPWD(loginData.password, user.password);
                    if (isPWDOk) {
                        const tokenPayload = { userId: user.id };
                        return reply(JWT.sign(tokenPayload, this.key));
                    }
                    else
                        return reply(Boom.unauthorized());
                })
            }
        });
    }
}
exports.LoginRoute = LoginRoute;
//# sourceMappingURL=LoginRoute.js.map