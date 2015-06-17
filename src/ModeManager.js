export class ModeManager {

    constructor() {
        this.modeMap = {
            maj7: 'Ionian',
            m7: 'Dorian',
            sus4b9: 'Phrygian',
            'maj7#11': 'Lydian',
            '7sus4': 'Mixolydian',
            m7b13: 'Aeolian',
            m7b5: 'Locrian',
            mMaj7: 'Melodic Minor',
            'maj7#5': 'Lydian Augmented',
            '7#11': 'Lydian Dominant',
            'm9b5': 'Locrian Natural 9',
            '7alt': 'Altered Dominant' 
        };
    }

    findMode(chordType) {
        return this.modeMap[chordType];
    }
}