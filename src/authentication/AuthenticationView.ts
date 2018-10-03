

import {ConnectionNotifications} from "../connection/ConnectionNotifications";
import {AuthenticationNotifications} from "./AuthenticationNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {INotification} from "../core/INotification";
import {ViewComponent} from "../core/ViewComponent";
import {Authentication} from "./Authentication";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";





export class AuthenticationView extends View {
    private authentication: ViewComponent;
    private authenticationContainer: HTMLElement;


    constructor() {
        super( "AuthenticationView" );

        this.container = document.createElement( "div" );
        this.container.id = "authentication-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.authenticationContainer = document.createElement( "div" );

        this.container.appendChild( this.authenticationContainer );

        this.authentication = new Authentication( this, this.authenticationContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.authentication.exitScene( exitType );

    }



    public listNotificationInterests(): any[] {

        let notifications = super.listNotificationInterests();

        // notifications.push( NOTIFICATION_NAME );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {
            case ConnectionNotifications.LOGIN_SUCCESS :
                console.log( "Authentication view received the notification" );
                break;

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {

            case AuthenticationNotifications.LOGIN_SUCCESS :


                this.sendNotification( AuthenticationNotifications.USER_AUTHENTICATED, signal.data );
                break;

            case AuthenticationNotifications.SIGN_UP_SUCCESS :

                this.sendNotification( AuthenticationNotifications.USER_SIGNED_UP, signal.data );
                break;

            default :
                break;
        }
    }

}