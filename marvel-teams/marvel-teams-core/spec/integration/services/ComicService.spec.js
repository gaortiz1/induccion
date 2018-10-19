import {ServiceRegistration} from "../../../src/framework/ServiceRegistration";

describe('ComicService.spec', function () {

    it('should find by title', function () {
        let response = ServiceRegistration.get('comicService').findByTitle('spider-man');
        expect(response).not.toBe([]);
    });

});