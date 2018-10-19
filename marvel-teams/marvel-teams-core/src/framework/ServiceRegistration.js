import {ContainerBuilder, Reference} from 'node-dependency-injection'
import {HttpClient} from "../utils/HttpClient";
import {MarvelConfig} from "../config/MarvelConfig";
import {DelegateMarvelApi} from "../repositories/DelegateMarvelApi";
import {ComicRepository} from "../repositories/ComicRepository";
import {ComicService} from "../service/ComicService";

const CONTAINER = new ContainerBuilder();

CONTAINER
    .register('delegateMarvelApi', DelegateMarvelApi)
    .addArgument(new MarvelConfig())
    .addArgument(new HttpClient());

CONTAINER.register('comicRepository', ComicRepository)
    .addArgument(new Reference('delegateMarvelApi'));

CONTAINER.register('comicService', ComicService)
    .addArgument(new Reference('comicRepository'));


export class ServiceRegistration {

    static get(name) {
        return CONTAINER.get(name);
    }

}