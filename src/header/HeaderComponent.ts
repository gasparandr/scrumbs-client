

import {ViewEnterTypes} from "../core/ViewEnterTypes";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {HeaderSignals} from "./HeaderSignals";
import {View} from "../core/View";

import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;



// CSS
import "../_style/style-sheets/header/component/header-component.scss";



// HTML
const template = require( "../_view-templates/header/component/header-component.html" );






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
            this.sendSignal( HeaderSignals.SWITCH_TO_SIGNUP );

            this.actionBtn.innerHTML        = "Log In";
            this.authMessage.innerHTML      = "Already have an account?";
            this.authViewComponentActive    = "SIGNUP";
        } else {
            this.sendSignal( HeaderSignals.SWITCH_TO_LOGIN );

            this.actionBtn.innerHTML        = "Sign Up";
            this.authMessage.innerHTML      = "Don't have an account?";
            this.authViewComponentActive    = "LOGIN";
        }

    }



    public enterScene(enterType?: string): void {
        console.info( "Enter being called in authentication header view component" );

        if ( enterType === ViewEnterTypes.REVEAL_COMPONENT ) {

            TweenLite.to( this.container, 0.4, { marginTop: 0, ease: Back.easeOut.config( 0.35 ) } );

        } else {
            this.registerEventListeners();
        }


    }



    public exitScene(exitType?: string): void {

        console.info( "Exit being called in authentication header view component" );

        if ( exitType === ViewExitTypes.HIDE_COMPONENT ) {

            TweenLite.to( this.container, 0.4, { marginTop: -70, ease: Power0.easeOut } );


        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();
            this.view.componentExited( this.name );

        }

    }
}