export class ComicRepository {

    constructor(delegateRestApi){
        this.delegateRestApi = delegateRestApi;
    }

    findByTitle(title) {
        let params = new Map();
        params.set('titleStartsWith', title);
        return this.delegateRestApi.find('v1/public/comics', params);
    }

    findById(id) {
        return this.delegateRestApi.findOne('v1/public/comics/' + id, new Map());
    }

}