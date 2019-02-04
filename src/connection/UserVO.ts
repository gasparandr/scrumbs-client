


import {IProxyVO} from "../core/IProxyVO";

export class UserVO implements IProxyVO {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName  = firstName;
        this.lastName   = lastName;
    }

}