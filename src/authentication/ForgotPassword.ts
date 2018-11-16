




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
import {ValidationHelper} from "../helpers/ValidationHelper";
import {Language} from "../languages/Language";
import {StringPointers} from "../languages/StringPointers";

//HTML template
const template = require("../_view-templates/forgot-password.html");





export class ForgotPassword extends ViewComponent {

    private forgotPasswordContainer: HTMLElement;
    private emailInput: HTMLInputElement;
    private tryLoggingInBtn: HTMLElement;
    private sendInstructionsBtn: HTMLElement;
    private errorText: HTMLElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "ForgotPassword view component initiated!" );


        this.container.innerHTML = template;

        this.forgotPasswordContainer    = document.getElementById( "authentication-forgot-password-container" );
        this.emailInput                 = document.getElementById( "authentication-forgot-password-email-input" ) as HTMLInputElement;
        this.tryLoggingInBtn            = document.getElementById( "authentication-forgot-password-try-logging-in" );
        this.sendInstructionsBtn        = document.getElementById( "authentication-forgot-password-button-send-instructions" );
        this.errorText                  = document.getElementById( "authentication-forgot-password-error" );


        this.translateComponent();



        this.tryLoggingInHandler        = this.tryLoggingInHandler.bind( this );
        this.sendInstructionsHandler    = this.sendInstructionsHandler.bind( this );
        this.emailInputHandler          = this.emailInputHandler.bind( this );


        this.registerEventListeners();

    }


    private registerEventListeners(): void {

        this.tryLoggingInBtn.addEventListener( "click", this.tryLoggingInHandler );
        this.sendInstructionsBtn.addEventListener( "click", this.sendInstructionsHandler );
        this.emailInput.addEventListener( "focus", this.emailInputHandler );

    }


    private unregisterEventListeners(): void {

        this.tryLoggingInBtn.removeEventListener( "click", this.tryLoggingInHandler );
        this.sendInstructionsBtn.removeEventListener( "click", this.sendInstructionsHandler );
        this.emailInput.removeEventListener( "focus", this.emailInputHandler );
    }


    private tryLoggingInHandler(e: any): void {

        this.exitScene( ViewExitTypes.SWITCH );


    }



    private sendInstructionsHandler(e: any): void {

        const email = this.emailInput.value;

        if ( ! email ) {

            this.errorText.innerHTML = "Please enter an email address.";

            TweenLite.to( this.errorText, 0.3, { opacity: 1 } );
            TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        } else if ( ! ValidationHelper.validateEmail( email ) ) {
            this.errorText.innerHTML = "Invalid email address.";

            TweenLite.to( this.errorText, 0.3, { opacity: 1 } );
            TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        } else {

            this.connection.forgotPassword(
                email,
                (response: any) => {
                    console.log( response );
                },
                (message: string) => {
                    console.error( message );
                }
            )
        }

    }



    private emailInputHandler(e: any): void {
        TweenLite.to( this.errorText, 0.3, { opacity: 0 } );
        TweenLite.to( this.emailInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut } );
    }



    private translateComponent(): void {

        document.getElementById( "authentication-forgot-password-title" ).innerHTML                                     = Language.getTranslation( StringPointers.FORGOT_PW_TITLE );

        document.getElementById( "authentication-forgot-password-email-label" ).innerHTML                               = Language.getTranslation( StringPointers.FORGOT_PW_EMAIL_LABEL );

        ( document.getElementById( "authentication-forgot-password-email-input" ) as HTMLInputElement ).placeholder     = Language.getTranslation( StringPointers.FORGOT_PW_EMAIL_PLACEHOLDER );

        document.getElementById( "authentication-forgot-password-send-instructions-span" ).innerHTML                    = Language.getTranslation( StringPointers.FORGOT_PW_SEND_INSTRUCTIONS );

        document.getElementById( "authentication-forgot-password-remember" ).innerHTML                                  = Language.getTranslation( StringPointers.FORGOT_PW_REMEMBERED_PASSWORD );

        document.getElementById( "authentication-forgot-password-try-logging-in" ).innerHTML                            = Language.getTranslation( StringPointers.FORGOT_PW_TRY_LOGGING_IN );

    }



    public enterScene(enterType?:string): void {

        if ( enterType === ViewExitTypes.SWITCH ) {

            TweenLite.to( this.forgotPasswordContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } } );

        }

    }



    public exitScene(exitType?:string): void {


        if ( exitType === ViewExitTypes.SWITCH ) {

            const self = this;



            TweenLite.to( this.forgotPasswordContainer, 0.25, { opacity: 0 } );


            TweenLite.to( this.forgotPasswordContainer, 0.5, { css: { top: "calc(50% + 60px)"}, onComplete: function () {
                self.sendSignal( AuthenticationNotifications.TRY_LOGGING_IN );
            }});





        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();

            this.view.componentExited( this.name );
        }

    }

}