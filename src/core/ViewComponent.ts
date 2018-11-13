

import {ScrumbsProxy} from "../connection/ScrumbsProxy";
import {IViewComponent} from "./IViewComponent";
import {View} from "./View";





export class ViewComponent implements IViewComponent {
    public container: HTMLElement;
    public view: View;
    public name: string;
    protected connection: ScrumbsProxy;

    constructor(view: View, container: HTMLElement) {
        this.view = view;
        this.container = container;
        this.name = ( <any>this ).constructor.name;
        this.connection = new ScrumbsProxy( this.name + "Proxy" );
        this.view.viewComponentExitCount[ this.name ] = null;
    }


    public sendSignal(name: string, data?: any, sender?: any) {

        this.view.handleSignal( { name, data, sender } );
    }



    public enterScene(): void {

    }



    public exitScene(exitType: string): void {
        if ( this.connection ) this.connection.unregister();
    }
}