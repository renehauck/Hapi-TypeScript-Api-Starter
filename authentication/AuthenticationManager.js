"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
class AuthenticationManager {
    static getUserFromDB() {
        return { id: "4711", name: "Rainer Zufall", password: "1234" };
    }
    get validateFunction() {
        return (decoded, request, callback) => {
            const user = AuthenticationManager.getUserFromDB();
            if (user.id !== decoded.userId) {
                return callback(null, false);
            }
            else {
                return callback(null, true);
            }
        };
    }
    static checkPWD(payLoadPass, dbPass) {
        return new Promise((resolve, reject) => {
            if (payLoadPass === dbPass)
                resolve(true);
            else
                resolve(false);
        });
    }
}
exports.AuthenticationManager = AuthenticationManager;
//# sourceMappingURL=AuthenticationManager.js.map