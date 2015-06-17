import {ModeManager} from './ModeManager';

export class Chord {
    constructor(options) {
        this.type = options.type;
        this.mode = this.setMode();
        this.root = options.root;
        this.subs = options.subs;
        this.parentKey = this.setParentKey();
    }

    setParentKey() {

    }

    setMode() {
        var modeManager = new ModeManager();
        return modeManager.findMode(this.type);
    }
}