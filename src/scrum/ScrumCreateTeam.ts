

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
    private exitBtn: HTMLSpanElement;




    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.exitBtn = document.getElementById( "create-team-exit-button" );


        this.exitBtnHandler = this.exitBtnHandler.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {
        this.exitBtn.addEventListener( "click", this.exitBtnHandler );
    }



    private unregisterEventListeners(): void {
        this.exitBtn.removeEventListener( "click", this.exitBtnHandler );

    }



    private exitBtnHandler(e: any) {
        this.exitScene( ViewExitTypes.HIDE_COMPONENT );
    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum create team view component" );


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
        console.info( "Exit being called in scrum create team view component" );


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