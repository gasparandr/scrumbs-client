

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum-teams.scss";
import {ScrumSignals} from "./ScrumSignals"; // INSERT NAME


// HTML
const template = require( "../_view-templates/scrum-teams.html" ); // INSERT NAME






export class ScrumTeams extends ViewComponent {
    private createTeamBtn: HTMLButtonElement;
    private teamSettingsBtn: HTMLButtonElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.createTeamBtn      = document.getElementById( "scrum-create-team-btn" ) as HTMLButtonElement;
        this.teamSettingsBtn    = document.getElementById( "scrum-team-settings-btn" ) as HTMLButtonElement;


        this.createTeamBtnListener = this.createTeamBtnListener.bind( this );

        this.enterScene();
    }



    private registerEventListeners(): void {
        this.createTeamBtn.addEventListener( "click", this.createTeamBtnListener );
    }



    private unregisterEventListeners(): void {
        this.createTeamBtn.removeEventListener( "click", this.createTeamBtnListener );

    }



    private createTeamBtnListener(e: any) {
        this.sendSignal( ScrumSignals.CREATE_TEAM );
    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum teams view component" );
        this.registerEventListeners();
    }



    public exitScene(exitType?: string): void {
        console.info( "Exit being called in scrum teams view view component" );

        super.exitScene( exitType );
        this.unregisterEventListeners();
        this.view.componentExited( this.name );
    }
}