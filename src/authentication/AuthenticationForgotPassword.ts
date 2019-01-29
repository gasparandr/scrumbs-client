
import {AuthenticationSignals} from "./AuthenticationSignals";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";

import TweenLite = gsap.TweenLite;


// CSS
import "../_style/style-sheets/authentication-forgot-password.scss";


// HTML
const template = require( "../_view-templates/authentication-forgot-password.html" );






export class AuthenticationForgotPassword extends ViewComponent {

    private title: HTMLHeadingElement;
    private subTitle: HTMLHeadingElement;

    private emailInputLabel: HTMLLabelElement;
    private emailInput: HTMLInputElement;
    private emailInputError: HTMLSpanElement;


    private tryLoggingInBtn: HTMLSpanElement;




    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "Login view component initialized." );

        this.container.innerHTML = template;

        this.title                  = document.getElementById( "" ) as HTMLHeadingElement;
        this.subTitle               = document.getElementById( "" ) as HTMLHeadingElement;

        this.emailInputLabel        = document.getElementById( "" ) as HTMLLabelElement;
        this.emailInput             = document.getElementById( "input-email-forgot-password" ) as HTMLInputElement;
        this.emailInputError        = document.getElementById( "" ) as HTMLSpanElement;

        this.tryLoggingInBtn        = document.getElementById( "try-logging-in" ) as HTMLSpanElement;


        this.tryLoggingInBtnListener  = this.tryLoggingInBtnListener.bind( this );



        this.enterScene();
    }



    private registerEventListeners(): void {
        this.tryLoggingInBtn.addEventListener( "click", this.tryLoggingInBtnListener );
    }



    private unregisterEventListeners(): void {
        this.tryLoggingInBtn.addEventListener( "click", this.tryLoggingInBtnListener );
    }



    private tryLoggingInBtnListener( e: any ) {
        this.exitScene( ViewEnterTypes.SWITCH_COMPONENT, AuthenticationSignals.SWITCH_FORGOT_PASSWORD_TO_LOGIN );
    }



    public enterScene( enterType?: string ): void {
        console.info( "Authentication forgot password view component enter scene" );

        if ( enterType === ViewEnterTypes.SWITCH_COMPONENT ) {

            this.container.style.display = "block";

            TweenLite.to( this.container, 0.8, { opacity: 1 } );

        } else {
            this.registerEventListeners();
        }

    }



    public exitScene( exitType: string, signal?: string ): void {
        console.info( "Exit being called in authentication forgot password view component" );

        if ( exitType === ViewExitTypes.SWITCH_COMPONENT ) {

            TweenLite.to( this.container, 0.6, { opacity: 0, onComplete: () => {
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