
import {IAddRemoveMemberModel} from "./models/IAddRemoveMemberModel";
import {ICreateMemberModel} from "./models/ICreateMemberModel";
import {ICreateNoteModel} from "./models/ICreateNoteModel";
import {ICreateTeamModel} from "./models/ICreateTeamModel";
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
        );
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
        );
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



    public createTeam(data: ICreateTeamModel, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/teams",
            data,
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
        );
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



    public addMemberToTeam(data: IAddRemoveMemberModel, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            "api/v1/members/add",
            data,
            success,
            failure
        )
    }



    public removeMemberFromTeam(data: IAddRemoveMemberModel, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            "api/v1/members/remove",
            data,
            success,
            failure
        )
    }



    public getNotes(memberId: string, success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            `/api/v1/notes/${ memberId }`,
            null,
            success,
            failure
        );
    }



    public createNote(data: ICreateNoteModel, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/notes/",
            data,
            success,
            failure
        )
    }



    public solveImpediment(impedimentId: string, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            `/api/v1/notes/solve/${ impedimentId }`,
            null,
            success,
            failure
        );
    }



    public unsolveImpediment(impedimentId: string, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            `/api/v1/notes/unsolve/${ impedimentId }`,
            null,
            success,
            failure
        );
    }

}