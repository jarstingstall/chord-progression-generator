import {chords} from './chords';
import {scales} from './scales';

const MAJOR = 'major';
const MELODIC_MINOR = 'melodicMinor';

export class HarmonyManager {

    getChordsOfType(chordType) {
        var tonality = this.getTonality(chordType);

        return scales[tonality].map((scale) => {
            return {
                root: scale[this.getChordPosition(tonality, chordType)], 
                type: chordType
            };
        });
    }

    setChordTones(chord) {
        var tonality = this.getTonality(chord.type);
        var position = this.getChordPosition(tonality, chord.type);
        var scale = this.getScale(position, tonality, chord.root);
        chord.tones = {};
        chord.tones.root = scale[position];
        chord.tones.third = scale[position + 2] ? scale[position + 2] : scale[position - 5];
        chord.tones.fifth = scale[position + 4] ? scale[position + 4] : scale[position - 3];
        chord.tones.seventh = scale[position + 6] ? scale[position + 6] : scale[position - 1];
        return chord;
    }

    getTonality(chordType) {
        if (chords.major.indexOf(chordType) != -1) {
            return MAJOR;
        } else if (chords.melodicMinor.indexOf(chordType) != -1) {
            return MELODIC_MINOR;
        } else {
            throw new Error('Chord type is not supported.');
        }
    }

    getChordPosition(tonality, chordType) {
        return chords[tonality].indexOf(chordType);
    }

    getScale(position, tonality, root) {
        var scale = scales[tonality].filter((scale) => {
            return scale[position] === root;
        });
        return scale[0];
    }
}