

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum/component/scrum-create-team.scss";


// HTML
const template = require( "../_view-templates/scrum/component/scrum-create-team.html" );






export class ScrumCreateTeam extends ViewComponent {
    private saveBtn: HTMLButtonElement;
    private exitBtn: HTMLSpanElement;
    private addMemberBtn: HTMLElement;
    private teamNameInput: HTMLInputElement;
    private membersContainer: HTMLUListElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.saveBtn            = document.getElementById( "create-team-save-button" ) as HTMLButtonElement;
        this.exitBtn            = document.getElementById( "create-team-exit-button" ) as HTMLSpanElement;
        this.addMemberBtn       = document.getElementById( "create-team-add-member-button" );
        this.teamNameInput      = document.getElementById( "create-team-name-input" ) as HTMLInputElement;
        this.membersContainer   = document.getElementById( "create-team-members-container" ) as HTMLUListElement;


        this.exitBtnHandler = this.exitBtnHandler.bind( this );
        this.saveBtnHandler = this.saveBtnHandler.bind( this );


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
        this.resetView();
    }


    private saveBtnHandler(e: any) {

    }



    private resetView(): void {
        this.teamNameInput.value            = "";
        this.membersContainer.innerHTML     = "";
    }



    private addMember(memberData: any): void {

        let member          = document.createElement( "li" );
        member.innerHTML    = memberData.name;
        member.id           = memberData._id;
        let checkbox        = document.createElement( "span" );
        checkbox.className  = "create-team-member-checkbox";

        member.appendChild( checkbox );

        this.membersContainer.insertBefore( member, this.membersContainer.firstChild );

        member.addEventListener( "click", () => member.classList.toggle( "active" ) );

    }



    private populateMembers(): void {
        this.connection.getMembers(
            (response: any) => {
                const { members } = response;

                for ( let member of members ) {
                    this.addMember( member );
                }
            },
            (err: string) => console.error( err )
        )
    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum create team view component" );


        switch ( enterType ) {

            case ViewEnterTypes.REVEAL_COMPONENT :

                this.container.style.display = "block";
                this.populateMembers();

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