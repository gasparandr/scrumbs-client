

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum/component/scrum-manage-teams.scss";


// HTML
const template = require( "../_view-templates/scrum/component/scrum-manage-teams.html" );






export class ScrumManageTeams extends ViewComponent {





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;



        this.enterScene();
    }



    private registerEventListeners(): void {

    }



    private unregisterEventListeners(): void {

    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum manage teams view component" );

        switch ( enterType ) {

            case ViewEnterTypes.REVEAL_COMPONENT :

                this.container.style.display = "block";

                break;


            default :
                this.registerEventListeners();
                break;
        }
    }



    public exitScene(exitType?: string): void {
        console.info( "Exit being called in scrum manage teams view component" );

        switch ( exitType ) {

            case ViewExitTypes.HIDE_COMPONENT :

                this.container.style.display = "none";

                break;

            default :
                super.exitScene( exitType );
                this.unregisterEventListeners();
                this.view.componentExited( this.name );
                break;
        }
    }
}