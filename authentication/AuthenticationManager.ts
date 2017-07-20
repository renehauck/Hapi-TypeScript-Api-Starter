import * as Promise from "bluebird"
import * as JWT from "jsonwebtoken"

export interface ITokenPayLoad{
    userId:string
}

export class AuthenticationManager {

    static getUserFromDB() {
        return { id: "4711", name: "Rainer Zufall", password: "1234" }
    }

    get validateFunction() {
        return (decoded:ITokenPayLoad, request, callback: (err: Error, valid: boolean) => void) => {
            const user = AuthenticationManager.getUserFromDB();

            if (user.id!==decoded.userId) {
                return callback(null, false);
            }
            else {
                return callback(null, true);
            }
        };
    }

    static checkPWD(payLoadPass: string, dbPass: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (payLoadPass === dbPass)
                resolve(true)
            else
                resolve(false)
        })
    }
}

