export class ObjectUtils {

    static isString(string) {
        return typeof string === 'string' || string instanceof String;
    }

    static isUndefined(object) {
        return object === undefined || object === null;
    }

}