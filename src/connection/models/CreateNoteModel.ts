

import {ICreateNoteModel} from "./ICreateNoteModel";





export class CreateNoteModel implements ICreateNoteModel {
    public member: string;
    public content: string;
    public isImpediment: boolean;

    constructor(member: string, content: string, isImpediment: boolean = false) {
        this.member     = member;
        this.content    = content;
        this.isImpediment  = isImpediment;
    }

}