import {UrlBuilder} from '../../../src/utils/UrlBuilder';

describe('UrlBuilder', function () {

    it('should build url without parameters', function () {

        let url = new UrlBuilder()
            .withHost('localhost')
            .withProtocol('https')
            .withPath('v1/comics')
            .build();

        expect(url).toEqual('https://localhost/v1/comics');
    });

    it('should build url with parameters', function () {

        let url = new UrlBuilder()
            .withHost('localhost')
            .withProtocol('https')
            .withPath('v1/comics')
            .withParamter('api', '123')
            .withParamter('hash', 'abcd')
            .build();

        expect(url).toEqual('https://localhost/v1/comics?api=123&hash=abcd');
    });

    it('should build url with many parameters', function () {

        let params = new Map();
        params.set('title', 'spiderman')

        let url = new UrlBuilder()
            .withHost('localhost')
            .withProtocol('https')
            .withPath('v1/comics')
            .withParamter('api', '123')
            .withParamter('hash', 'abcd')
            .withParamter('title', 'spiderman')
            .withParamters(params)
            .build();

        expect(url).toEqual('https://localhost/v1/comics?api=123&hash=abcd&title=spiderman');
    });



    it('should not build url when it have not host', function () {
        expect(function(){ new UrlBuilder().withProtocol('https').build(); }).toThrow(new Error('host can not be null'));
    });

    it('should not build url when it have not protocol', function () {
        expect(function(){ new UrlBuilder().withHost('localhost').build(); }).toThrow(new Error('protocol can not be null'));
    });
});