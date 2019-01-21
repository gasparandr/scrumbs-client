


import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/header-component.scss";


// HTML
const template = require( "../_view-templates/header-component.html" );






export class HeaderComponent extends ViewComponent {





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