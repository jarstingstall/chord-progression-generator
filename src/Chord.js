export class Chord {
    constructor(options) {
        this.type = options.type;
        this.mode = options.mode;
        this.parentTonality = options.parentTonality;
        this.root = options.root;
        this.parentKey = options.parentKey;
    }

    get relativeMode() {
        return `${this._getOrdinal(this.mode.order)} mode of ${this.parentKey} ${this.parentTonality}`
    }

    _getOrdinal(n) {
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }
}