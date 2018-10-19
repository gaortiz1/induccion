var config = require('config');

export class MarvelConfig {

    constructor(){
        this.publicKey = config.get('publicKey');
        this.privateKey = config.get('privateKey');
        this.timestamp = config.get('timestamp');
        this.hash = config.get('hash');
        this.host = config.get('host');
        this.protocol = config.get('protocol');
    }
}