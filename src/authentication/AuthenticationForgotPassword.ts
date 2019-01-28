

import {View} from "../core/View";
import {ViewComponent} from "../core/ViewComponent";


// CSS
import "../_style/style-sheets/authentication-forgot-password.scss";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {AuthenticationNotifications} from "./AuthenticationNotifications";


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
        this.sendSignal( AuthenticationNotifications.TRY_LOGGING_IN );
    }



    public enterScene( enterType?: string ): void {

        if ( enterType === ViewEnterTypes.SWITCH_COMPONENT ) {
            this.container.style.display = "block";
            console.log( "Authentication forgot password view component enter scene" );
        } else {
            this.registerEventListeners();
        }

    }



    public exitScene( exitType: string ): void {

        console.info( "Exit being called in authentication forgot password view component" );

        if ( exitType === ViewExitTypes.SWITCH_COMPONENT ) {

            this.container.style.display = "none";

        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();
            this.view.componentExited( this.name );

        }

    }
}