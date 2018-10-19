import {JsonMarvelUtils} from "../../../src/utils/JsonMarvelUtils";


describe('JsonMarvelUtils', function () {

    it('should get result of data when is OK', function () {

        let json = {
            "code": 200,
            "data": {
                "offset": 0,
                "limit": 20,
                "total": 1491,
                "count": 20,
                "results": [{
                    "id": 1011334,
                    "name": "3-D Man"
                }]
            }
        };

        expect(JsonMarvelUtils.getData(json)).toEqual([{
            "id": 1011334,
            "name": "3-D Man"
        }]);
    });

    it('should get empty json when data does not exist', function () {

        let json = {
            "code": 404,
            "status": "We couldn't find that comic_story"
        }

        expect(JsonMarvelUtils.getData(json)).toEqual([{}]);
    });

});