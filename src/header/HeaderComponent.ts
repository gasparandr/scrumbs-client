

import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/header-component.scss";
import {HeaderNotifications} from "./HeaderNotifications";


// HTML
const template = require( "../_view-templates/header-component.html" );






export class HeaderComponent extends ViewComponent {

    private actionBtn: HTMLButtonElement;
    private authMessage: HTMLSpanElement;

    private authViewComponentActive: string;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.authViewComponentActive = "LOGIN";

        this.actionBtn      = document.getElementById( "header-button" ) as HTMLButtonElement;
        this.authMessage    = document.getElementById( "auth-message" ) as HTMLSpanElement;


        this.actionBtnClickListener = this.actionBtnClickListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {
        this.actionBtn.addEventListener( "click", this.actionBtnClickListener );
    }



    private unregisterEventListeners(): void {
        this.actionBtn.removeEventListener( "click", this.actionBtnClickListener );
    }


    private actionBtnClickListener(e: any): void {

        if ( this.authViewComponentActive === "LOGIN" ) {
            this.sendSignal( HeaderNotifications.SIGN_UP );
            this.actionBtn.innerHTML        = "Log In";
            this.authMessage.innerHTML      = "Already have an account?";
            this.authViewComponentActive    = "SIGNUP";
        } else {
            this.sendSignal( HeaderNotifications.LOG_IN );
            this.actionBtn.innerHTML        = "Sign Up";
            this.authMessage.innerHTML      = "Don't have an account?";
            this.authViewComponentActive    = "LOGIN";
        }

    }



    public enterScene(): void {
        this.registerEventListeners();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        console.info( "Exit being called in authentication login view component" );

        this.view.componentExited( this.name );
    }
}