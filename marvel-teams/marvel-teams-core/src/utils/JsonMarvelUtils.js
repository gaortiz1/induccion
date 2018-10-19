const EMPTY_MARVEL_JSON = [{}];

export class JsonMarvelUtils {

    static isValidJson(json){
        return json.hasOwnProperty('code') && json['code'] === 200;
    }

    static getData(json) {
        return this.isValidJson(json) ? json['data']['results'] : EMPTY_MARVEL_JSON;
    }

}