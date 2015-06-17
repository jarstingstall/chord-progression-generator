import {chords} from './chords';
import {scales} from './scales';

const MAJOR = 'major';
const MELODIC_MINOR = 'melodicMinor';

export class HarmonyManager {
    getChordsOfType(chordType) {
        var tonality;
        
        if (chords.major.indexOf(chordType) != -1) {
            tonality = MAJOR;
        } else if (chords.melodicMinor.indexOf(chordType) != -1) {
            tonality = MELODIC_MINOR;
        } else {
            throw new Error('Chord type is not supported.');
        }

        return scales[tonality].map((scale) => {
            return {
                root: scale[chords[tonality].indexOf(chordType)], 
                type: chordType
            };
        });
    }
}