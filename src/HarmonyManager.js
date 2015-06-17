import {chords} from './chords';
import {scales} from './scales';

export class HarmonyManager {
    getChordsOfType(chordType) {
        var position, scale;
        if (chords.major.indexOf(chordType) != -1) {
            position = chords.major.indexOf(chordType);
            scale = 'major';
        } else if (chords.melodicMinor.indexOf(chordType) != -1) {
            position = chords.melodicMinor.indexOf(chordType);
            scale = 'melodic minor';
        }

        if (scale === 'major') {
            return scales.major.map((scale) => {
                return {root: scale[position], type: chordType};
            });
        } else if (scale === 'melodic minor') {
            return scales.melodicMinor.map((scale) => {
                return {root: scale[position], type: chordType};
            });
        }
    }
}