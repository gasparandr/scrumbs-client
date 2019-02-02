

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import Back = gsap.Back;


// CSS
import "../_style/style-sheets/authentication/component/authentication-sign-up.scss";



// HTML
const template = require( "../_view-templates/authentication/component/authentication-sign-up.html" );






export class AuthenticationSignUp extends ViewComponent {

    private title: HTMLHeadingElement;
    private subTitle: HTMLHeadingElement;

    private nameInputLabel: HTMLLabelElement;
    private nameInput: HTMLInputElement;
    private nameInputError: HTMLSpanElement;

    private emailInputLabel: HTMLLabelElement;
    private emailInput: HTMLInputElement;
    private emailInputError: HTMLSpanElement;

    private passwordInputLabel: HTMLLabelElement;
    private passwordInput: HTMLInputElement;
    private passwordInputError: HTMLSpanElement;





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.title                  = document.getElementById( "" ) as HTMLHeadingElement;
        this.subTitle               = document.getElementById( "" ) as HTMLHeadingElement;

        this.nameInputLabel         = document.getElementById( "" ) as HTMLLabelElement;
        this.nameInput              = document.getElementById( "" ) as HTMLInputElement;
        this.nameInputError         = document.getElementById( "" ) as HTMLSpanElement;

        this.emailInputLabel        = document.getElementById( "" ) as HTMLLabelElement;
        this.emailInput             = document.getElementById( "" ) as HTMLInputElement;
        this.emailInputError        = document.getElementById( "" ) as HTMLSpanElement;

        this.passwordInputLabel     = document.getElementById( "" ) as HTMLLabelElement;
        this.passwordInput          = document.getElementById( "" ) as HTMLInputElement;
        this.passwordInputError     = document.getElementById( "" ) as HTMLSpanElement;


    }



    private registerEventListeners(): void {


    }



    private unregisterEventListeners(): void {



    }



    public enterScene(enterType: string): void {
        console.info( "Enter being called in authentication sign up view component" );

        if ( enterType === ViewEnterTypes.SWITCH_COMPONENT ) {

            this.container.style.display = "block";

            TweenLite.to( this.container, 0.8, { opacity: 1 } );

            TweenLite.to( this.container, 0.5, { paddingTop: 60,  ease: Back.easeOut.config( 0.35 ) } );

        } else {
            this.registerEventListeners();
        }

    }



    public exitScene(exitType: string, signal?: string): void {
        console.info( "Exit being called in authentication sign up view component" );

        if ( exitType === ViewExitTypes.SWITCH_COMPONENT ) {

            TweenLite.to( this.container, 0.4, { paddingTop: 130 } );

            TweenLite.to( this.container, 0.4, { opacity: 0, ease: Power1.easeOut, onComplete: () => {
                this.container.style.display = "none";
                if ( signal ) this.sendSignal( signal );
            }});

        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();
            this.view.componentExited( this.name );

        }


    }
}