

import {View} from "../core/View";
import {ViewComponent} from "../core/ViewComponent";


// CSS
import "../_style/style-sheets/authentication-log-in.scss";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {AuthenticationNotifications} from "./AuthenticationNotifications";


// HTML
const template = require( "../_view-templates/authentication-log-in.html" );






export class AuthenticationLogin extends ViewComponent {

    private title: HTMLHeadingElement;
    private subTitle: HTMLHeadingElement;

    private emailInputLabel: HTMLLabelElement;
    private emailInput: HTMLInputElement;
    private emailInputError: HTMLSpanElement;

    private passwordInputLabel: HTMLLabelElement;
    private passwordInput: HTMLInputElement;
    private passwordInputError: HTMLSpanElement;

    private forgotPassBtn: HTMLParagraphElement;





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "Login view component initialized." );

        this.container.innerHTML = template;

        this.title                  = document.getElementById( "" ) as HTMLHeadingElement;
        this.subTitle               = document.getElementById( "" ) as HTMLHeadingElement;

        this.emailInputLabel        = document.getElementById( "" ) as HTMLLabelElement;
        this.emailInput             = document.getElementById( "" ) as HTMLInputElement;
        this.emailInputError        = document.getElementById( "" ) as HTMLSpanElement;

        this.passwordInputLabel     = document.getElementById( "" ) as HTMLLabelElement;
        this.passwordInput          = document.getElementById( "" ) as HTMLInputElement;
        this.passwordInputError     = document.getElementById( "" ) as HTMLSpanElement;

        this.forgotPassBtn          = document.getElementById( "forgot-password" ) as HTMLParagraphElement;


        this.forgotPassBtnListener  = this.forgotPassBtnListener.bind( this );



        this.enterScene();
    }



    private registerEventListeners(): void {
        this.forgotPassBtn.addEventListener( "click", this.forgotPassBtnListener );
    }



    private unregisterEventListeners(): void {
        this.forgotPassBtn.removeEventListener( "click", this.forgotPassBtnListener );
    }


    
    private forgotPassBtnListener( e: any ) {
        this.sendSignal( AuthenticationNotifications.FORGOT_PASSWORD );
    }



    public enterScene(enterType?: string): void {

        if ( enterType === ViewEnterTypes.SWITCH_COMPONENT ) {
            this.container.style.display = "block";
            console.log( "Authentication login view component enter scene" );
        } else {
            this.registerEventListeners();
        }

    }



    public exitScene( exitType: string ): void {

        console.info( "Exit being called in authentication login view component" );


        if ( exitType === ViewExitTypes.SWITCH_COMPONENT ) {

            this.container.style.display = "none";

        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();
            this.view.componentExited( this.name );

        }

    }
}