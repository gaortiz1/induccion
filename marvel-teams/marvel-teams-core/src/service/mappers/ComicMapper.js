import {ComicDTO} from "../../dto/ComicDTO";

export class ComicMapper {

    static makeDTO(comic) {
        return new ComicDTO.Builer()
            .withId(comic.id)
            .withDescription(comic.description)
            .withTitle(comic.title)
            .build();
    }

    static makeListDTO(comics) {
        return comics.map(comic => this.makeDTO(comic));
    }

}