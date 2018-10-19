import {ServiceRegistration} from "../../../src/framework/ServiceRegistration";

describe('DelegateMarvelApi', function () {

    it('should find one by path without parameters', function () {
        let response = ServiceRegistration.get('delegateMarvelApi').findOne('v1/public/comics/12', new Map());
        expect(response).not.toBe(undefined);
    });

    it('should find by path with parameters', function () {
        let parameters = new Map();
        parameters.set('title', 'marvel');
        let response = ServiceRegistration.get('delegateMarvelApi').find('v1/public/comics', parameters);
        expect(response).not.toBe(undefined);
    });

});