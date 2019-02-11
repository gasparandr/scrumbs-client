

import {AuthenticationNotifications} from "../authentication/AuthenticationNotifications";
import {AuthenticationView} from "../authentication/AuthenticationView";
import {HeaderView} from "../header/HeaderView";
import {INotification} from "./INotification";
import {ViewExitTypes} from "./ViewExitTypes";
import {ScrumView} from "../scrum/ScrumView";
import {CoreEntity} from "./CoreEntity";
import {View} from "./View";


// CSS
import "../_style/style-sheets/main.scss";
import { ImpedimentsView } from "../impediments/ImpedimentsView";






export class ViewManager extends CoreEntity {
    private headerView: View;
    private currentView: View;





    constructor() {
        super( "ViewManager" );
        this.initView();
    }



    private initView(): void {

        this.headerView = new HeaderView();
        this.currentView = new AuthenticationView();
    }



    private switchView(view: any, exitType?: string, callback?: Function): void {

        if ( ! exitType ) exitType = ViewExitTypes.DEFAULT;

        this.currentView.exitScene( exitType, () => {

            this.currentView = new view();

            if ( callback ) callback();

        });
    }



    public listNotificationInterests(): any[] {

        let notifications = [];


        notifications.push( AuthenticationNotifications.LOGIN );
        notifications.push( AuthenticationNotifications.SIGN_UP );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {

            case AuthenticationNotifications.LOGIN :

                // this.switchView( ScrumView, null );

                this.switchView( ImpedimentsView, null );

                break;

            case AuthenticationNotifications.SIGN_UP :

                this.switchView( ScrumView, null );

                break;

            default :
                break;
        }

    }

}