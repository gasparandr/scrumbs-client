

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/scrum/component/scrum-notes.scss";


// HTML
const template = require( "../_view-templates/scrum/component/scrum-notes.html" );






export class ScrumNotes extends ViewComponent {
    private memberName: HTMLHeadingElement;
    private options: HTMLSpanElement;

    private noteContainer: HTMLUListElement;

    private noteInput: HTMLInputElement;
    private blockerCheckbox: HTMLInputElement;



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.memberName         = document.getElementById( "scrum-notes-member-name" ) as HTMLHeadingElement;
        this.options            = document.getElementById( "scrum-notes-member-options" ) as HTMLSpanElement;

        this.noteContainer      = document.getElementById( "scrum-notes-note-container" ) as HTMLUListElement;

        this.noteInput          = document.getElementById( "scrum-note-input" ) as HTMLInputElement;
        this.blockerCheckbox    = document.getElementById( "scrum-notes-blocker-checkbox" ) as HTMLInputElement;


        this.enterScene();
    }



    private registerEventListeners(): void {

    }



    private unregisterEventListeners(): void {

    }



    public loadMemberNotes(memberData: any): void {
        const { id, name } = memberData;

        if ( ! id || ! name ) {
            console.error( "Invalid member data, unable to load notes." );
            return;
        }

        this.memberName.innerText = name;
        this.noteContainer.innerHTML = "";

        this.connection.getNotes(
            id,
            (response: any) => {
                console.log( response );
                this.populate( response.notes );
            },
            (err: any) => console.error( err )
        )
    }



    public populate(notes: any[]): void {
        if ( ! notes.length ) return;

        let date = null;

        for ( let i = notes.length - 1; i >= 0; i-- ) {
            let noteCreated = this.getParsedDate( notes[i].date );

            /** If it's a new date, add a separator before adding the note */
            if ( date !== noteCreated ) {
                this.addSeparator( noteCreated );
                date = noteCreated;
            }

            this.addNote( notes[i] );
        }
    }



    public addNote(noteData: any, prepend?: boolean): void {
        let note        = document.createElement( "li" );
        note.id         = noteData._id;
        note.className  = "scrum-note pointer";

        if ( noteData.isBlocker ) note.classList.add( "blocker" );
        if ( noteData.isSolved ) note.classList.add( "solved" );

        let noteText            = document.createElement( "p" );
        noteText.className      = "scrum-note-text";
        noteText.innerText      = noteData.content;

        let noteOptions         = document.createElement( "span" );
        noteOptions.className   = "scrum-note-options";

        let noteCheckmark       = document.createElement( "span" );
        noteCheckmark.className = "scrum-note-checkmark";

        note.appendChild( noteText );
        note.appendChild( noteOptions );
        note.appendChild( noteCheckmark );


        noteCheckmark.addEventListener( "click", () => {

            console.log( "click registered", note );

            if ( note.classList.contains( "solved" ) ) {
                this.unsolveImpediment( note );
            } else {
                this.solveImpediment( note );
            }
        });

        if ( prepend ) {
            this.noteContainer.insertBefore( note, this.noteContainer.firstChild );
        } else {
            this.noteContainer.appendChild( note );
        }
    }



    public addSeparator(date: string) {

        let separator       = document.createElement( "li" );
        separator.className = "scrum-note-date bold";

        let dateText        = document.createElement( "span" );
        dateText.innerText  = date;

        separator.appendChild( dateText );

        this.noteContainer.appendChild( separator );
    }



    public getParsedDate(dateISO: string): string {
        const date  = new Date( dateISO );
        const year  = date.getFullYear();
        const day   = date.getDate();
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ][ date.getMonth() ];


        return `${ month } ${ day } ${ year }`;
    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in scrum notes view component" );

        switch ( enterType ) {

            case ViewEnterTypes.REVEAL_COMPONENT :

                this.container.style.display = "block";

                break;


            default :
                this.registerEventListeners();
                break;
        }
    }



    public solveImpediment(note: HTMLElement): void {

        this.connection.solveImpediment(
            note.id,
            () => note.classList.add( "solved" ),
            (err: string) => console.error( err )
        );
    }



    public unsolveImpediment(note: HTMLElement): void {

        this.connection.unsolveImpediment(
            note.id,
            () => note.classList.remove( "solved" ),
            (err: string) => console.error( err )
        )
    }



    public exitScene(exitType?: string): void {
        console.info( "Exit being called in scrum notes view component" );

        super.exitScene( exitType );
        this.unregisterEventListeners();
        this.view.componentExited( this.name );
    }
}