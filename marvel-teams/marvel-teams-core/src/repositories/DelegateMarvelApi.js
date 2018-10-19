import {UrlBuilder} from "../utils/UrlBuilder";
import {JsonMarvelUtils} from "../utils/JsonMarvelUtils";

export class DelegateMarvelApi {

    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }

    find(path, params) {
        let url = new UrlBuilder()
            .withProtocol(this.config.protocol)
            .withHost(this.config.host)
            .withPath(path)
            .withParamter('apikey', this.config.publicKey)
            .withParamter('hash', this.config.hash)
            .withParamter('ts', this.config.timestamp)
            .withParamters(params)
            .build();

        return  JsonMarvelUtils.getData(this.httpClient.get(url));
    }

    findOne(path, params) {
        let json = this.find(path, params);

        if (json.length > 1)
            throw new Error('return more elements');

        return json[0];
    }
}