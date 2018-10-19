import {MarvelConfig} from '../../../src/config/MarvelConfig';

describe('MarvelConfig', function () {

    it('should get the file config', function () {
        var marvelConfig = new MarvelConfig();
        expect(marvelConfig.publicKey).toEqual('f0a76b68fa77c0f2848f87129088d661');
        expect(marvelConfig.privateKey).toEqual('c294f5175d321faf337bb196cebd0e7c995ba2a3');
        expect(marvelConfig.hash).toEqual('84d04e1a358c25937ec414ffead0a568');
        expect(marvelConfig.host).toEqual('gateway.marvel.com');
        expect(marvelConfig.timestamp).toEqual('1');
        expect(marvelConfig.protocol).toEqual('https');
    });
});