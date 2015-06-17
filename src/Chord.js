import {ModeManager} from './ModeManager';
import {KeyManager} from './KeyManager';

export class Chord {
    constructor(options) {
        this.type = options.type;
        this.root = options.root;
    }
}