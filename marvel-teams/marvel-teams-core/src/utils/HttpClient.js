import xmlhttprequest from "xmlhttprequest";
import {ObjectUtils} from "./ObjectUtils";

const REQUEST = new xmlhttprequest.XMLHttpRequest();
const EMPTY_JSON = "{}"

export class HttpClient {

    get(request) {

        REQUEST.open('GET', request, false)
        REQUEST.send(null);

        return ObjectUtils.isUndefined(REQUEST.responseText) ? JSON.parse(EMPTY_JSON) : JSON.parse(REQUEST.responseText);
    }
}