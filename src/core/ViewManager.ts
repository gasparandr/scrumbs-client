

import {INotification} from "./INotification";
import {ViewExitTypes} from "./ViewExitTypes";
import {CoreEntity} from "./CoreEntity";
import {View} from "./View";






export class ViewManager extends CoreEntity {
    private currentView: View;


    constructor() {
        super( "ViewManager" );
        this.initView();
    }


    private initView(): void {


        this.currentView = null
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


        notifications.push( " " );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {

        }

    }

}