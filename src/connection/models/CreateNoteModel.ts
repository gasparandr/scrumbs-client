

import {ICreateNoteModel} from "./ICreateNoteModel";





export class CreateNoteModel implements ICreateNoteModel {
    public member: string;
    public content: string;
    public isBlocker: boolean;

    constructor(member: string, content: string, isBlocker: boolean = false) {
        this.member     = member;
        this.content    = content;
        this.isBlocker  = isBlocker;
    }

}