import {ComicMapper} from "./mappers/ComicMapper";

export class ComicService {

    constructor(comicRepository){
        this.comicRepository = comicRepository;
    }

    findByTitle(title) {
        let comics = this.comicRepository.findByTitle(title);
        return ComicMapper.makeListDTO(comics);
    }

}