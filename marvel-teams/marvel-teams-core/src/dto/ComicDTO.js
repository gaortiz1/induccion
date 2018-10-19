export class ComicDTO {

    constructor(builer){
        this.id = builer.id;
        this.title = builer.title;
        this.description = builer.description;
    }

    static get Builer() {

        class Builer {

            withId(id) {
                this.id = id;
                return this;
            }

            withTitle(title) {
                this.title = title;
                return this;
            }

            withDescription(description) {
                this.description = description;
                return this;
            }

            build() {
                return new ComicDTO(this);
            }
        }

        return Builer;
    }
}