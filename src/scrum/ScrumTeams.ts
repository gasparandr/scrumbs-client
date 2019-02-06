

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ScrumSignals} from "./ScrumSignals";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum/component/scrum-teams.scss";
import {CreateMemberModel} from "../connection/models/CreateMemberModel";


// HTML
const template = require( "../_view-templates/scrum/component/scrum-teams.html" );






export class ScrumTeams extends ViewComponent {
    private createTeamBtn: HTMLButtonElement;
    private teamSettingsBtn: HTMLButtonElement;

    private title: HTMLHeadingElement;
    private teamsContainer: HTMLUListElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.title              = document.getElementById( "scrum-teams-title" ) as HTMLHeadingElement;
        this.createTeamBtn      = document.getElementById( "scrum-create-team-btn" ) as HTMLButtonElement;
        this.teamSettingsBtn    = document.getElementById( "scrum-team-settings-btn" ) as HTMLButtonElement;
        this.teamsContainer     = document.getElementById( "scrum-teams-team-container" ) as HTMLUListElement;


        this.populate();

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



    public populate(): void {
        this.connection.getTeams(
            (response: any ) => {
                console.log( response );

                const { teams } = response;

                this.populateTeams( teams );

                let defaultTeamId: string;

                for ( let team of teams ) {
                    if ( team.isDefault === true ) {
                        defaultTeamId = team._id;
                        break;
                    }
                }

                if ( ! defaultTeamId ) return;

                this.connection.getMembersOfTeam(
                    defaultTeamId,
                    (response: any) => this.populateMembers( defaultTeamId, response.members ),
                    (err: any) => console.error( err )
                );

            },
            (err: string) => console.error( err )
        )
    }



    private populateTeams(teams: any[]): void {

        for ( let team of teams ) {

            let teamContainer           = document.createElement( "li" );
            teamContainer.className     = "scrum-team";

            let header                  = document.createElement( "div" );
            header.className            = "scrum-team-header pointer";

            let title                   = document.createElement( "h2" );
            title.className             = "scrum-team-name bold noselect";
            title.innerHTML             = team.name;

            let button                  = document.createElement( "button" );
            button.className            = "scrum-create-member-btn";

            let membersContainer        = document.createElement( "ul" );
            membersContainer.id         = team._id;
            membersContainer.className  = "scrum-team-members";

            header.appendChild( title );
            header.appendChild( button );

            teamContainer.appendChild( header );
            teamContainer.appendChild( membersContainer );

            if ( team.isDefault ) {
                this.teamsContainer.insertBefore( teamContainer, this.teamsContainer.firstChild );
            } else {
                this.teamsContainer.appendChild( teamContainer );
            }

            this.addToggleListenerToHeader( header, teamContainer );
            this.addClickListenerToAddMemberBtn( button, membersContainer );

        }
    }



    private populateMembers(teamId: string, members: any[]): void {

        const membersContainer = document.getElementById( teamId );

        for ( let i = members.length - 1; i >= 0; i-- ) {
            this.addMember( members[i], membersContainer );
        }

        membersContainer.parentElement.classList.add( "active" );
    }



    private addMember(memberData: any, membersContainer: HTMLElement, prepend?: boolean): void {
        let member           = document.createElement( "li" );
        member.id            = memberData._id;
        member.className     = "scrum-team-member pointer noselect";
        member.innerHTML     = memberData.name;

        if ( ! prepend ) {
            membersContainer.appendChild( member );
        } else {
            membersContainer.insertBefore( member, membersContainer.firstChild );
        }
    }



    private createMember(name: string, team: string): void {
        if ( ! name ) return;

        console.log( name );

        const createMemberModel = new CreateMemberModel( name, team );

        this.connection.createMember(
            createMemberModel,
            (response: any) => {
                console.log( response );
                const { member }        = response;
                const membersContainer  = document.getElementById( team );

                this.addMember( member, membersContainer, true );

            },
            (err: string) => console.error( err )
        )
    }



    private addToggleListenerToHeader(header: HTMLElement, teamContainer: HTMLElement): void {
        header.addEventListener( "click", (e: any) => {
            if ( e.target.classList.contains( "scrum-create-member-btn" ) ) return;

            if ( header.nextElementSibling.hasChildNodes() ) {

                teamContainer.classList.toggle( "active" );

            } else {

                this.connection.getMembersOfTeam(
                    header.nextElementSibling.id,
                    (response: any) => this.populateMembers( header.nextElementSibling.id, response.members ),
                    (err: string) => console.error( err )
                )
            }
        });
    }



    private addClickListenerToAddMemberBtn(button: HTMLButtonElement, membersContainer: HTMLElement): void {
        button.addEventListener( "click", (e: any) => {

            /** If the input is already there, abort */

            if ( membersContainer.firstChild.nodeName === "INPUT" ) return;

            /** If the container is not expanded, expand it now */

            if ( ! membersContainer.parentElement.classList.contains( "active" ) ) membersContainer.parentElement.classList.add( "active" );

            /** Create the input, insert it and focus */

            const input = document.createElement( "input" );
            membersContainer.insertBefore( input, membersContainer.firstChild );
            input.placeholder = "Type member name";
            input.focus();

            /** Register the event listeners for the input */

            input.addEventListener( "blur", () => {
                if ( input.value ) this.createMember( input.value, membersContainer.id );
                input.parentNode.removeChild( input );
            });

            input.addEventListener( "keydown", (e: any) => {
                const key = e.which || e.keyCode;

                if ( key === 27 ) { // ESC
                    input.blur();
                } else if ( key === 13 ) { // ENTER
                    this.createMember( input.value, membersContainer.id );
                    input.value = "";
                    input.blur();
                }
            })
        });
    }
}