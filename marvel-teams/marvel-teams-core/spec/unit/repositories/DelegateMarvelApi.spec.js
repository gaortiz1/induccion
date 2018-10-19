import {DelegateMarvelApi} from '../../../src/repositories/DelegateMarvelApi';

let delegateMarvelApi, mockConfig, mockHttpClient;

describe('DelegateMarvelApi', function () {

    beforeEach(function () {
        mockConfig = {
            publicKey: '1234',
            privateKey: 'abcd',
            timestamp: '1',
            hash: 'hash',
            host: 'localhost',
            protocol: 'https'
        };

        mockHttpClient = {
            get: function (url) {
                return {
                    "code": 200,
                    "data": {
                        "offset": 0,
                        "limit": 20,
                        "total": 1491,
                        "count": 20,
                        "results": [{
                            "id": 1,
                            "name": "x man"
                        }]
                    }
                };
            }
        };

        delegateMarvelApi = new DelegateMarvelApi(mockConfig, mockHttpClient);

        spyOn(mockHttpClient, 'get').and.callThrough();
    });

    it('should find by path without parameters', function () {
        expect(delegateMarvelApi.find('v1/comic/12', new Map())).toEqual([{
            "id": 1,
            "name": "x man"
        }]);
        expect(mockHttpClient.get).toHaveBeenCalled();
    });

    it('should find by path without parameters', function () {
        expect(delegateMarvelApi.findOne('v1/comic', new Map())).toEqual({
            "id": 1,
            "name": "x man"
        });
        expect(mockHttpClient.get).toHaveBeenCalled();
    });
});