

import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";
import {AuthenticationLogin} from "./AuthenticationLogin";


// CSS
import "../_style/style-sheets/authentication-view.scss";
import {AuthenticationSignUp} from "./AuthenticationSignUp";
import {AuthenticationForgotPassword} from "./AuthenticationForgotPassword";
import {HeaderNotifications} from "../header/HeaderNotifications";
import {AuthenticationNotifications} from "./AuthenticationNotifications";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewEnterTypes} from "../core/ViewEnterTypes";

// HTML
const authenticationViewTemplate = require( "../_view-templates/authentication-view.html" );


export class AuthenticationView extends View {
    private authenticationLogin: ViewComponent;
    private authenticationSignUp: ViewComponent;
    private authenticationForgotPassword: ViewComponent;

    private authenticationLoginContainer: HTMLElement;
    private authenticationSignUpContainer: HTMLElement;
    private authenticationForgotPasswordContainer: HTMLElement;





    constructor() {
        super( "AuthenticationView" );

        this.container = document.createElement( "div" );
        this.container.id = "authentication-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = authenticationViewTemplate;

        this.authenticationLoginContainer           = document.getElementById( "authentication-log-in-container" );
        this.authenticationSignUpContainer          = document.getElementById( "authentication-sign-up-container" );
        this.authenticationForgotPasswordContainer  = document.getElementById( "authentication-forgot-password-container" );


        this.authenticationLogin            = new AuthenticationLogin( this, this.authenticationLoginContainer );
        this.authenticationSignUp           = new AuthenticationSignUp( this, this.authenticationSignUpContainer );
        this.authenticationForgotPassword   = new AuthenticationForgotPassword( this, this.authenticationForgotPasswordContainer );


        this.enterScene();
    }



    public enterScene(): void {


    }



    public exitScene( exitType: string, callback: Function ): void {

        this.exitCallback = callback;

        this.authenticationLogin.exitScene( exitType );
        this.authenticationSignUp.exitScene( exitType );
        this.authenticationForgotPassword.exitScene( exitType );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        notifications.push( HeaderNotifications.SIGN_UP );
        notifications.push( HeaderNotifications.LOG_IN );
        notifications.push( AuthenticationNotifications.FORGOT_PASSWORD );

        return notifications;
    }



    public handleNotification(notification: INotification): void {
        console.log( "Notification received in " + this.NAME + ": " + notification.name );

        switch ( notification.name ) {

            case HeaderNotifications.SIGN_UP :

                this.authenticationLogin.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationForgotPassword.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationSignUp.enterScene( ViewEnterTypes.SWITCH_COMPONENT );


                break;

            case HeaderNotifications.LOG_IN :

                this.authenticationSignUp.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationForgotPassword.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationLogin.enterScene( ViewEnterTypes.SWITCH_COMPONENT );


                break;
                

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "Signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {

            case AuthenticationNotifications.FORGOT_PASSWORD :

                this.authenticationLogin.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationSignUp.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationForgotPassword.enterScene( ViewEnterTypes.SWITCH_COMPONENT );


                break;


            case AuthenticationNotifications.TRY_LOGGING_IN :

                this.authenticationSignUp.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationForgotPassword.exitScene( ViewExitTypes.SWITCH_COMPONENT );
                this.authenticationLogin.enterScene( ViewEnterTypes.SWITCH_COMPONENT );


                break;


            default:
                break;
        }

    }

}