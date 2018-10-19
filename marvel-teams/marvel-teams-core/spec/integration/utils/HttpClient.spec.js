import {HttpClient} from '../../../src/utils/HttpClient';

describe("HttpClient", function () {

    it("should get json from api when it is connected", function () {
        let response = new HttpClient().get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f0a76b68fa77c0f2848f87129088d661&hash=84d04e1a358c25937ec414ffead0a568');
        expect(response).not.toBe(undefined);
    });

    it("should get empty json from api when it is not connected", function () {
        let response = new HttpClient().get('http://localhost/v1/public/characters?ts=1&apikey=f0a76b68fa77c0f2848f87129088d661&hash=84d04e1a358c25937ec414ffead0a568');
        expect(response).toEqual({});
    });
});