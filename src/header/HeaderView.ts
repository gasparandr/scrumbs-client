

import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";



import {SystemConstants} from "../core/SystemConstants";
import {HeaderComponent} from "./HeaderComponent";



// CSS
import "../_style/style-sheets/header-view.scss";

// HTML
const headerViewTemplate = require( "../_view-templates/header-view.html" );






export class HeaderView extends View {
    private header: ViewComponent;

    private headerContainer: HTMLElement;





    constructor() {
        super( "AuthenticationView" );

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