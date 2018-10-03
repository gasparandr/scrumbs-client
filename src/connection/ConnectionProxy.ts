

import {ConnectionNotifications} from "./ConnectionNotifications";
import {SignUpModel} from "./models/SignUpModel";
import {LoginModel} from "./models/LoginModel";
import {CoreEntity} from "../core/CoreEntity";





export class ConnectionProxy extends CoreEntity {
    private address: string;
    public static userId: string;
    public static userFirstName: string;
    public static userLastName: string;
    public static userEmail: string;



    constructor(proxyName: string) {
        super( proxyName );

        this.address = "http://138.68.82.238:4200";
    }



    public login(data: LoginModel, success: Function, failure: Function): void {

        console.info("Proxy login executed");

        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/login", true );
        xhr.setRequestHeader('Content-type', 'application/json' );
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            ConnectionProxy.userId          = response.userId;
            ConnectionProxy.userFirstName   = response.firstName;
            ConnectionProxy.userLastName    = response.lastName;
            ConnectionProxy.userEmail       = response.email;


            console.log( "response userId" );
            console.log( response.userId );

            console.log( response );

            if ( response.success ) {
                console.log( "LOGIN SUCCESS" );

                if ( success ) {
                    success( response );

                    const initials = response.firstName.toUpperCase()[0] + response.lastName.toUpperCase()[0];

                    this.sendNotification( ConnectionNotifications.LOGIN_SUCCESS, initials );
                }
            } else {

                console.log("LOGIN FAILURE! " + response.message);

                if ( failure ) failure( response.message );

            }
        };

        xhr.send( JSON.stringify( data ) );

    }



    public signUp(data: SignUpModel, success: Function, failure: Function): void {
        console.info("Proxy sign up executed");
        console.log(data);

        const self = this;

        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/signup", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            ConnectionProxy.userId = response.userId;

            console.log( response );

            if ( response.success ) {
                console.log( "SIGN UP SUCCESS" );

                if ( success ) success( response );
            } else {

                console.log("SIGN UP FAILURE! " + response.message);

                if ( failure ) failure( response.message );

            }
        };

        xhr.send( JSON.stringify( data ) );

    }



    public createRecord(name: string, success: Function, failure: Function): void {
        console.info("Proxy create record executed");

        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/records/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            console.log( response );

            if ( response.success ) {

                if ( success ) success( response.record );
            } else {

                if ( failure ) failure( response.message );
            }
        };


        xhr.send( JSON.stringify( { name: name, owner: ConnectionProxy.userId } ) );
    }



    public getRecords(success: Function, failure: Function): void {
        console.info("Proxy get records executed");


        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.address + "/records/" + ConnectionProxy.userId, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response.userRecords );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        xhr.send();

    }



    public deleteRecord( recordId: string, success: Function, failure: Function): void {
        console.info("Proxy delete record executed");


        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', this.address + "/records/delete/" + recordId, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        xhr.send();
    }



    public addNote(recordId: string, content: string, isBlocker: boolean, callback: Function) {
        console.info("Proxy create note executed" );


        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/notes/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            console.log( response );

            if ( response.success ) {
                console.log( "NOTE CREATION SUCCESS!" );

                if ( callback ) callback( response.log );

                this.sendNotification( ConnectionNotifications.CREATE_NOTE_SUCCESS, response );
            } else {
                console.log("NOTE CREATION FAILURE! " + response.message);
                this.sendNotification( ConnectionNotifications.CREATE_NOTE_FAILURE, response );
            }
        };

        xhr.send( JSON.stringify( { recordId: recordId, content: content, userId: ConnectionProxy.userId, isBlocker: isBlocker } ) );
    }



    public createBlocker(content: string, success: Function, failure: Function) {

        console.info("Proxy create blocker executed" );

        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/blockers/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            console.log( response );

            if ( response.success ) {

                if ( success ) success( response.blocker );

            } else {

                if ( failure ) failure( response.message);

            }
        };

        const label = ConnectionProxy.userFirstName + ' ' + ConnectionProxy.userLastName;
        const userId = ConnectionProxy.userId;


        xhr.send( JSON.stringify( { userId, content, label } ) );
    }



    public getBlockers(success: Function, failure: Function): void {
        console.info("Proxy get blockers executed");


        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.address + "/blockers/" + ConnectionProxy.userId, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        xhr.send();

    }



    public solveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy solve blocker executed" );

        let xhr = new XMLHttpRequest();
        xhr.open('PUT', this.address + "/blockers/solve/" + blockerId, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        xhr.send();
    }



    public unsolveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy unsolve blocker executed" );

        let xhr = new XMLHttpRequest();
        xhr.open('PUT', this.address + "/blockers/unsolve/" + blockerId, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        xhr.send();
    }



    public editRecord(recordId: string, name: string, success: Function, failure: Function): void {
        console.info("Proxy edit record executed");

        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/records/edit", true );
        xhr.setRequestHeader('Content-type', 'application/json' );
        xhr.onload = () => {
            let response = JSON.parse( xhr.responseText );

            console.log( response );

            if ( response.success ) {
                console.log( response.message );

                if ( success ) success( response );

            } else {

                console.log( response.message );

                if ( failure ) failure( response.message );

            }
        };

        xhr.send( JSON.stringify( { recordId, name } ) );
    }

}