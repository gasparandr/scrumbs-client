


import {SystemConstants} from "../core/SystemConstants";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/scrum-view.scss";


// HTML
const authenticationViewTemplate = require( "../_view-templates/scrum-view.html" );






export class ScrumView extends View {
    private viewComponent: ViewComponent;

    private viewComponentContainer: HTMLElement;





    constructor() {
        super( "AuthenticationView" );

        this.container = document.createElement( "div" );
        this.container.id = "template-view-container"; // ADD CUSTOM NAME

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML                = authenticationViewTemplate;

        this.viewComponentContainer             = document.getElementById( "container" ); // SPECIFY CONTAINER ID

        // this.viewComponent                      = new ViewComponentName( this, this.viewComponentContainer );



        this.enterScene();
    }



    public enterScene(): void {


    }



    public exitScene( exitType: string, callback: Function ): void {

        this.exitCallback = callback;

        this.viewComponent.exitScene( exitType ); // EXIT THE COMPONENT
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();


        return notifications;
    }



    public handleNotification(notification: INotification): void {
        console.log( "Notification received in " + this.NAME + ": " + notification.name );

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