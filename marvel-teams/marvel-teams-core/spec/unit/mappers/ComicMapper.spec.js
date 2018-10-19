import {ComicMapper} from "../../../src/service/mappers/ComicMapper";


describe('ComicMapper.spec', function () {

    it('should make a comicDTO', function () {
        let comic = {
            "id": 1,
            "title": "x man",
            "description": "x man the serie"
        };

        let comicDTO = ComicMapper.makeDTO(comic);
        expect(comicDTO.id).toEqual(1)
    });

});