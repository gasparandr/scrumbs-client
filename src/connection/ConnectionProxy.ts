
import {ILoginModel} from "./models/ILoginModel";
import {Proxy} from "../core/Proxy";
import {UserVO} from "./UserVO";


declare const SERVICE_URL: string;






export class ConnectionProxy extends Proxy {

    constructor(proxyName: string) {
        super( proxyName, SERVICE_URL );
    }



    public login(data: ILoginModel, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/authentication/login",
            data,
            (response: any ) => {

                ConnectionProxy.token           = response.tokenData.token;
                ConnectionProxy.tokenExpires    = response.tokenData.expires;

                const {  name, email } = response.userData;

                ConnectionProxy.setVO( new UserVO(
                    name,
                    email
                ));

                success( response );
            },
            failure
        )
    }



    public signUp(data: ILoginModel, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/authentication/sign-up",
            data,
            (response: any) => {

                ConnectionProxy.token           = response.tokenData.token;
                ConnectionProxy.tokenExpires    = response.tokenData.expires;

                const {  name, email } = response.userData;

                ConnectionProxy.setVO( new UserVO(
                    name,
                    email
                ));

                success( response );
            },
            failure
        )
    }



}