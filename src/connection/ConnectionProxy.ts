

import {HTTPMethods} from "../core/HTTPMethods";
import {Proxy} from "../core/Proxy";
import {UserVO} from "./UserVO";


declare const SERVICE_URL: string;






export class ConnectionProxy extends Proxy {

    constructor(proxyName: string) {
        super( proxyName, SERVICE_URL );
    }




}