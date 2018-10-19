import preconditions from 'preconditions';

export class UrlBuilder {

    constructor() {
        this.parameters = new Map();
    }

    withHost(host) {
        this.host = host;
        return this;
    }

    withProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }

    withPath(path) {
        this.path = path;
        return this;
    }

    withParamter(parameter, value) {
        this.parameters.set(parameter, value);
        return this;
    }

    withParamters(parameters) {

        if (parameters.size > 0)
            parameters.forEach((value, key) => this.withParamter(key, value));

        return this;
    }

    build() {
        preconditions.errr().shouldBeDefined(this.protocol, 'protocol can not be null').test();
        preconditions.errr().shouldBeDefined(this.host, 'host can not be null').test();

        return this.protocol + "://" + this.host + '/' + this.path + this.getParameters();
    }

    getParameters() {
        return this.parameters.size > 0 ?
            this.reduce() :
            '';
    }

    reduce() {
        let index = 0;
        let result = '?';
        this.parameters.forEach((value, parameter) => {
            result += parameter + '=' + value + (index++ < this.parameters.size - 1 ? '&':'');
        })

        return result;
    }
}