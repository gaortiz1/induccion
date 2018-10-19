import {ComicRepository} from '../../../src/repositories/ComicRepository';

let comicRepository;

describe('ComicRepository', function () {

    it('should get result by title', function () {

        // var mockApiRest = {
        //     get: function (endPoint) {
        //         return JSON.getData("{ \"code\":200, \"results\":[ { \"id\":1 }, { \"id\":2 } ] }");
        //     }
        // }
        // spyOn(mockApiRest, 'get').and.callThrough();
        //
        // comicRepository = new ComicRepository(mockApiRest);
        //
        // expect(comicRepository.findByTitle('avengers')).toEqual([{id: 1}, {id: 2}]);
        // expect(mockApiRest.get).toHaveBeenCalled();
    });
});