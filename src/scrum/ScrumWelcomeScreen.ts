

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum/component/scrum-welcome-screen.scss";
import {ScrumSignals} from "./ScrumSignals";


// HTML
const template = require( "../_view-templates/scrum/component/scrum-welcome-screen.html" );






export class ScrumWelcomeScreen extends ViewComponent {
    private tempClick: HTMLElement;




    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.tempClick = document.getElementById( "scrum-welcome-screen-profile" );


        this.enterScene();
    }



    private registerEventListeners(): void {
        this.tempClick.addEventListener( "click", () => this.exitScene( ViewExitTypes.SWITCH_COMPONENT, ScrumSignals.SWITCH_WELCOME_SCREEN_TO_NOTES ) );
    }



    private unregisterEventListeners(): void {

    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum welcome screen view component" );

        switch ( enterType ) {

            default :
                this.registerEventListeners();
                break;
        }
    }



    public exitScene(exitType?: string, signal?: string): void {
        console.info( "Exit being called in scrum welcome screen view component" );

        switch ( exitType ) {

            case ViewExitTypes.SWITCH_COMPONENT :

                this.container.style.display = "none";

                if ( signal ) this.sendSignal( signal );

                break;

            default :
                super.exitScene( exitType );
                this.unregisterEventListeners();
                this.view.componentExited( this.name );
                break;
        }
    }
}