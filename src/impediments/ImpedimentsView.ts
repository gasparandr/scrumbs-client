


import {SystemConstants} from "../core/SystemConstants";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/impediments/view/impediments-view.scss";
import {ImpedimentsHeader} from "./ImpedimentsHeader";


// HTML
const impedimentsViewTemplate = require( "../_view-templates/impediments/view/impediments-view.html" );






export class ImpedimentsView extends View {
    private impedimentsHeader: ViewComponent;

    private impedimentsHeaderContainer: HTMLElement;





    constructor() {
        super( "ImpedimentsView" );

        this.container = document.createElement( "div" );
        this.container.id = "impediments-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML                    = impedimentsViewTemplate;

        this.impedimentsHeaderContainer             = document.getElementById( "impediments-header-container" ); // SPECIFY CONTAINER ID

        this.impedimentsHeader                      = new ImpedimentsHeader( this, this.impedimentsHeaderContainer );



        this.enterScene();
    }



    public enterScene(): void {


    }



    public exitScene( exitType: string, callback: Function ): void {

        this.exitCallback = callback;

        this.impedimentsHeader.exitScene( exitType ); // EXIT THE COMPONENT
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