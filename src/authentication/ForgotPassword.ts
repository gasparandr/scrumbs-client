




import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import Power0 = gsap.Power0;
import Back = gsap.Back;


//CSS
import "../_style/style-sheets/forgot-password.scss";
import {AuthenticationNotifications} from "./AuthenticationNotifications";
import {ViewExitTypes} from "../core/ViewExitTypes";

//HTML template
const template = require("../_view-templates/forgot-password.html");





export class ForgotPassword extends ViewComponent {

    private forgotPasswordContainer: HTMLElement;
    private tryLoggingInBtn: HTMLElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "ForgotPassword view component initiated!" );


        this.container.innerHTML = template;

        this.forgotPasswordContainer    = document.getElementById( "authentication-forgot-password-container" );
        this.tryLoggingInBtn            = document.getElementById( "authentication-forgot-password-try-logging-in" );


        this.tryLoggingInHandler = this.tryLoggingInHandler.bind( this );


        this.registerEventListeners();

    }


    private registerEventListeners(): void {

        this.tryLoggingInBtn.addEventListener( "click", this.tryLoggingInHandler );


    }


    private unregisterEventListeners(): void {

        this.tryLoggingInBtn.removeEventListener( "click", this.tryLoggingInHandler );
    }


    private tryLoggingInHandler(e: any): void {

        this.exitScene( ViewExitTypes.SWITCH );


    }



    public enterScene(enterType?:string): void {

        if ( enterType === ViewExitTypes.SWITCH ) {

            // TweenLite.to( this.forgotPasswordContainer, 0.4, { opacity: 1 } );
            // TweenLite.to( this.forgotPasswordContainer, 0.4, { top: "calc( 50% + 50px )" } );

            TweenLite.to( this.forgotPasswordContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } } );

        }

    }



    public exitScene(exitType?:string): void {


        if ( exitType === ViewExitTypes.SWITCH ) {

            const self = this;



            TweenLite.to( this.forgotPasswordContainer, 0.4, { opacity: 0, onComplete: function () {
                self.sendSignal( AuthenticationNotifications.TRY_LOGGING_IN );
            }});


            TweenLite.to( this.forgotPasswordContainer, 3.5, { top: "calc( 50% + 60px )" } );





        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();

            this.view.componentExited( this.name );
        }

    }

}