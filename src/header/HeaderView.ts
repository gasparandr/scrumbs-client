

import {AuthenticationNotifications} from "../authentication/AuthenticationNotifications";
import {HeaderNotifications} from "./HeaderNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {INotification} from "../core/INotification";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewComponent} from "../core/ViewComponent";
import {HeaderComponent} from "./HeaderComponent";
import {HeaderConstants} from "./HeaderConstants";
import {HeaderSignals} from "./HeaderSignals";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/header/view/header-view.scss";



// HTML
const headerViewTemplate = require( "../_view-templates/header/view/header-view.html" );






export class HeaderView extends View {
    private header: ViewComponent;

    private headerContainer: HTMLElement;





    constructor() {
        super( "HeaderView" );

        this.container = document.createElement( "div" );
        this.container.id = "header-view-container";

        document.getElementById( SystemConstants.HEADING_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = headerViewTemplate;

        this.headerContainer = document.getElementById( "header-component-container" );

        this.header = new HeaderComponent( this, this.headerContainer );

        this.enterScene();
    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.header.exitScene( exitType );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        notifications.push( AuthenticationNotifications.LOGIN );
        notifications.push( AuthenticationNotifications.SIGN_UP );
        notifications.push( AuthenticationNotifications.EXIT_HEADER );
        notifications.push( AuthenticationNotifications.ENTER_HEADER );

        return notifications;
    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {

            case AuthenticationNotifications.LOGIN :
            case AuthenticationNotifications.SIGN_UP :

                ( this.header as HeaderComponent ).switchState( HeaderConstants.HEADER_APP_STATE );

                break;

            case AuthenticationNotifications.EXIT_HEADER :

                this.header.exitScene( ViewExitTypes.HIDE_COMPONENT );

                break;

            case AuthenticationNotifications.ENTER_HEADER :

                this.header.enterScene( ViewEnterTypes.REVEAL_COMPONENT );

                break;

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "Signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {

            case HeaderSignals.SWITCH_TO_SIGNUP :

                this.sendNotification( HeaderNotifications.SWITCH_TO_SIGNUP );

                break;

            case HeaderSignals.SWITCH_TO_LOGIN :

                this.sendNotification( HeaderNotifications.SWITCH_TO_LOGIN );

                break;


            default:
                break;
        }

    }

}