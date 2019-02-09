

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
    private saveBtn: HTMLButtonElement;
    private cancelBtn: HTMLButtonElement;
    private exitBtn: HTMLSpanElement;

    private teamNameInput: HTMLInputElement;
    private deleteTeamBtn: HTMLButtonElement;

    private addMemberBtn: HTMLElement;
    private memberContainer: HTMLUListElement;

    private addTeamBtn: HTMLElement;
    private teamContainer: HTMLUListElement;

    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.saveBtn            = document.getElementById( "manage-teams-save-button" ) as HTMLButtonElement;
        this.cancelBtn          = document.getElementById( "manage-teams-cancel-button" ) as HTMLButtonElement;
        this.exitBtn            = document.getElementById( "manage-teams-exit-button" ) as HTMLSpanElement;

        this.teamNameInput      = document.getElementById( "manage-teams-input-edit-team-name" ) as HTMLInputElement;
        this.deleteTeamBtn      = document.getElementById( "manage-teams-delete-team-button" ) as HTMLButtonElement;

        this.addMemberBtn       = document.getElementById( "manage-teams-add-member-button" ) as HTMLElement;
        this.memberContainer    = document.getElementById( "manage-teams-member-container" ) as HTMLUListElement;

        this.addTeamBtn         = document.getElementById( "manage-teams-add-team-button" ) as HTMLElement;
        this.teamContainer      = document.getElementById( "manage-teams-team-container" ) as HTMLUListElement;


        this.exitBtnHandler         = this.exitBtnHandler.bind( this );
        this.cancelBtnHandler       = this.cancelBtnHandler.bind( this );

        this.enterScene();
    }



    private registerEventListeners(): void {
        this.exitBtn.addEventListener( "click", this.exitBtnHandler );
        this.cancelBtn.addEventListener( "click", this.exitBtnHandler );
    }



    private unregisterEventListeners(): void {
        this.exitBtn.removeEventListener( "click", this.exitBtnHandler );
        this.cancelBtn.removeEventListener( "click", this.exitBtnHandler );
    }



    private exitBtnHandler(e: any) {
        this.exitScene( ViewExitTypes.HIDE_COMPONENT );
    }



    private populateTeams(): void {

    }



    private resetView(): void {
        this.teamNameInput.value        = null;
        this.teamContainer.innerHTML    = null;
        this.memberContainer.innerHTML  = null;

    }



    private cancelBtnHandler(e: any) {
        this.exitScene( ViewExitTypes.HIDE_COMPONENT );
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
                this.resetView();

                break;

            default :
                super.exitScene( exitType );
                this.unregisterEventListeners();
                this.view.componentExited( this.name );
                break;
        }
    }
}