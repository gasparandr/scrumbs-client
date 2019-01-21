import {View} from "../core/View";
import {ViewComponent} from "../core/ViewComponent";


// CSS
import "../_style/style-sheets/authentication-log-in.scss";


// HTML
const template = require( "../_view-templates/authentication-log-in.html" );






export class AuthenticationLogin extends ViewComponent {



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;

        this.enterScene();
    }



    private registerEventListeners(): void {


    }



    private unregisterEventListeners(): void {



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