
import {ICreateMemberModel} from "./models/ICreateMemberModel";
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

                this.setToken( response.tokenData );

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

                this.setToken( response.tokenData );

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



    public getTeams(success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            "/api/v1/teams",
            null,
            success,
            failure
        );
    }



    public getMembers(success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            "/api/v1/members",
            null,
            success,
            failure
        );
    }



    public createMember(data: ICreateMemberModel, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/members",
            data,
            success,
            failure
        )
    }



    public getMembersOfTeam(teamId: string, success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            `/api/v1/members/${ teamId }`,
            null,
            success,
            failure
        );
    }



}