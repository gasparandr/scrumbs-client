

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/impediments/component/impediments-unsolved.scss";


// HTML
const template = require( "../_view-templates/impediments/component/impediments-unsolved.html" );






export class ImpedimentsUnsolved extends ViewComponent {





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;



        this.enterScene();
    }



    private registerEventListeners(): void {

    }



    private unregisterEventListeners(): void {

    }



    private populate(): void {

        this.connection.getUnsolvedImpediments(
            (response: any) => {
                const { impediments } = response;

                for ( let impediment of impediments ) {

                    this.addImpediment( impediment );

                }
            },
            (err: string) => console.error( err )
        )
    }



    public addImpediment(impedimentData: any): void {
        /** Check if member is already rendered, if so - we append */
        let memberContainer = document.getElementById( impedimentData.member._id );

        if ( memberContainer ) {
            let impediment             = document.createElement( "li" );
            impediment.className       = "impediments-unsolved-member-impediment pointer";
            impediment.id              = impedimentData._id;
            impediment.innerText       = impedimentData.content;

            let checkbox            = document.createElement( "span" );
            checkbox.className      = "impediments-unsolved-member-impediment-checkbox";

            impediment.appendChild( checkbox );

            memberContainer.lastElementChild.appendChild( impediment );

            this.addListenerToImpediment( impediment );

        } else {
            /** If the member has no container on the page, we create it now */
            memberContainer                 = document.createElement( "li" );
            memberContainer.id              = impedimentData.member._id;
            memberContainer.className       = "impediments-unsolved-member-container";

            let memberName                  = document.createElement( "h3" );
            memberName.innerText            = impedimentData.member.name;
            memberName.className            = "impediments-unsolved-member-name bold";

            let impedimentsContainer        = document.createElement( "ul" );
            impedimentsContainer.className  = "impediments-unsolved-member-impediments";

            let impediment                  = document.createElement( "li" );
            impediment.className            = "impediments-unsolved-member-impediment pointer";
            impediment.innerText            = impedimentData.content;
            impediment.id                   = impedimentData._id;

            let checkbox                    = document.createElement( "span" );
            checkbox.className              = "impediments-unsolved-member-impediment-checkbox";

            impediment.appendChild( checkbox );
            impedimentsContainer.appendChild( impediment );

            memberContainer.appendChild( memberName );
            memberContainer.appendChild( impedimentsContainer );

            this.container.appendChild( memberContainer );

            this.addListenerToImpediment( impediment );
        }
    }


    private addListenerToImpediment(impediment: HTMLElement): void {

        impediment.addEventListener( "click", function () {
            impediment.classList.add( "active" );
        });
    }


    public enterScene(enterType?: string): void {
        console.info( "Enter being called in impediments unsolved view component" );
        this.registerEventListeners();
        this.populate();
    }



    public exitScene(exitType?: string): void {
        console.info( "Exit being called in impediments unsolved view component" );

        super.exitScene( exitType );
        this.unregisterEventListeners();
        this.view.componentExited( this.name );
    }
}