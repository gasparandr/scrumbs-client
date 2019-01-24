

import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";
import {AuthenticationLogin} from "./AuthenticationLogin";


// CSS
import "../_style/style-sheets/authentication-view.scss";
import {AuthenticationSignUp} from "./AuthenticationSignUp";

// HTML
const authenticationViewTemplate = require( "../_view-templates/authentication-view.html" );


export class AuthenticationView extends View {
    private authenticationLogin: ViewComponent;
    private authenticationSignUp: ViewComponent;

    private authenticationLoginContainer: HTMLElement;
    private authenticationSignUpContainer: HTMLElement;





    constructor() {
        super( "AuthenticationView" );

        this.container = document.createElement( "div" );
        this.container.id = "authentication-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = authenticationViewTemplate;

        this.authenticationLoginContainer   = document.getElementById( "authentication-log-in-container" );
        this.authenticationSignUpContainer  = document.getElementById( "authentication-sign-up-container" );


        this.authenticationLogin            = new AuthenticationLogin( this, this.authenticationLoginContainer );
        this.authenticationSignUp           = new AuthenticationSignUp( this, this.authenticationSignUpContainer );



        this.enterScene();
    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.authenticationLogin.exitScene( exitType );
        this.authenticationSignUp.exitScene( exitType );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {



            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "Signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {




            default:
                break;
        }

    }

}