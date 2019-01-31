

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum-create-team.scss"; // INSERT NAME


// HTML
const template = require( "../_view-templates/scrum-create-team.html" ); // INSERT NAME






export class ScrumCreateTeam extends ViewComponent {





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
        console.info( "Enter being called in scrum create team view component" );
        this.registerEventListeners();
    }



    public exitScene(exitType?: string): void {
        console.info( "Exit being called in scrum create team view component" );

        super.exitScene( exitType );
        this.unregisterEventListeners();
        this.view.componentExited( this.name );
    }
}