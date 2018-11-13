

import {EditRecordModel} from "./models/EditRecordModel";
import {AddNoteModel} from "./models/AddNoteModel";
import {SignUpModel} from "./models/SignUpModel";
import {HTTPMethods} from "../core/HTTPMethods";
import {LoginModel} from "./models/LoginModel";
import {Proxy} from "../core/Proxy";






export class ScrumbsProxy extends Proxy {

    constructor(proxyName: string) {
        super( proxyName, "http://192.168.0.101:3000/api/v1" );
    }



    public login(data: LoginModel, success: Function, failure: Function): void {

        console.info("Proxy login executed" );


        this.httpRequest(
            HTTPMethods.POST,
            "/authentication/login",
            data,
            (response: any) => {

                Proxy.token = response.token;


                success( response );
            },
            failure
        );

    }



    public signUp(data: SignUpModel, success: Function, failure: Function): void {
        console.info("Proxy sign up executed");

        this.httpRequest(
            HTTPMethods.POST,
            "/authentication/sign-up",
            data,
            (response: any) => {

                Proxy.token = response.token;


                success( response );
            },
            failure
        );




    }



    public createRecord(name: string, success: Function, failure: Function): void {
        console.info("Proxy create record executed");

        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', this.address + "/records/create", true);
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     console.log( response );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response.record );
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        //
        // xhr.send( JSON.stringify( { name: name, owner: ScrumbsProxy.userId } ) );

        this.httpRequest(
            HTTPMethods.POST,
            "/records/create",
            { name },
            success,
            failure
        );

    }



    public getRecords(success: Function, failure: Function): void {
        console.info("Proxy get records executed");


        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', this.address + "/records/" + ScrumbsProxy.userId, true );
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response.userRecords );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        // xhr.send();

        this.httpRequest(
            HTTPMethods.GET,
            "/records",
            null,
            success,
            failure
        );

    }



    public deleteRecord( recordId: string, success: Function, failure: Function): void {
        console.info("Proxy delete record executed");


        // let xhr = new XMLHttpRequest();
        // xhr.open('DELETE', this.address + "/records/delete/" + recordId, true );
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        // xhr.send();

        this.httpRequest(
            HTTPMethods.DELETE,
            "/records/" + recordId,
            null,
            success,
            failure
        );
    }



    public addNote(data: AddNoteModel, success: Function, failure: Function) {
        console.info("Proxy create note executed" );


        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', this.address + "/notes/create", true);
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     console.log( response );
        //
        //     if ( response.success ) {
        //         console.log( "NOTE CREATION SUCCESS!" );
        //
        //         if ( callback ) callback( response.log );
        //
        //         this.sendNotification( ConnectionNotifications.CREATE_NOTE_SUCCESS, response );
        //     } else {
        //         console.log("NOTE CREATION FAILURE! " + response.message);
        //         this.sendNotification( ConnectionNotifications.CREATE_NOTE_FAILURE, response );
        //     }
        // };
        //
        // xhr.send( JSON.stringify( { recordId: recordId, content: content, userId: ScrumbsProxy.userId, isBlocker: isBlocker } ) );


        this.httpRequest(
            HTTPMethods.POST,
            "/notes/create",
            data,
            success,
            failure
        );
    }



    public createBlocker(content: string, success: Function, failure: Function) {

        console.info("Proxy create blocker executed" );

        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', this.address + "/blockers/create", true);
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     console.log( response );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response.blocker );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message);
        //
        //     }
        // };
        //
        // const label = ScrumbsProxy.userFirstName + ' ' + ScrumbsProxy.userLastName;
        // const userId = ScrumbsProxy.userId;
        //
        //
        // xhr.send( JSON.stringify( { userId, content, label } ) );



        this.httpRequest(
            HTTPMethods.POST,
            "/blockers/create",
            { content },
            success,
            failure
        );


    }



    public getBlockers(success: Function, failure: Function): void {
        console.info("Proxy get blockers executed");


        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', this.address + "/blockers/" + ScrumbsProxy.userId, true );
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        // xhr.send();


        this.httpRequest(
            HTTPMethods.GET,
            "/blockers",
            null,
            success,
            failure
        );

    }



    public solveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy solve blocker executed" );

        // let xhr = new XMLHttpRequest();
        // xhr.open('PUT', this.address + "/blockers/solve/" + blockerId, true );
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        // xhr.send();

        this.httpRequest(
            HTTPMethods.PUT,
            "/blockers/solve/" + blockerId,
            null,
            success,
            failure
        );

    }



    public unsolveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy unsolve blocker executed" );

        // let xhr = new XMLHttpRequest();
        // xhr.open('PUT', this.address + "/blockers/unsolve/" + blockerId, true );
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     if ( response.success ) {
        //
        //         if ( success ) success( response );
        //
        //     } else {
        //
        //         if ( failure ) failure( response.message );
        //     }
        // };
        //
        // xhr.send();


        this.httpRequest(
            HTTPMethods.PUT,
            "/blockers/unsolve/" + blockerId,
            null,
            success,
            failure
        );
    }



    public editRecord(data: EditRecordModel, success: Function, failure: Function): void {
        console.info("Proxy edit record executed");

        // let xhr = new XMLHttpRequest();
        // xhr.open('PUT', this.address + "/records/edit", true );
        // xhr.setRequestHeader('Content-type', 'application/json' );
        // xhr.onload = () => {
        //     let response = JSON.parse( xhr.responseText );
        //
        //     console.log( response );
        //
        //     if ( response.success ) {
        //         console.log( response.message );
        //
        //         if ( success ) success( response );
        //
        //     } else {
        //
        //         console.log( response.message );
        //
        //         if ( failure ) failure( response.message );
        //
        //     }
        // };
        //
        // xhr.send( JSON.stringify( { recordId, name } ) );


        this.httpRequest(
            HTTPMethods.PUT,
            "/records/edit",
            data,
            success,
            failure
        );

    }

}