import {ServiceRegistration} from "../../../src/framework/ServiceRegistration";

describe('ComicRepository.spec', function () {

    it('should find by title', function () {
        let response = ServiceRegistration.get('comicRepository').findByTitle('spider-man');
        expect(response).not.toBe([]);
    });

    it('should find by title', function () {
        let response = ServiceRegistration.get('comicRepository').findById(14534);
        expect(response).not.toBe({});
    });

});