import find from 'lodash/collection/find';

export class KeyManager {

    constructor() {
        this.majorScaleChords = ['maj7', 'm7', 'sus4b9', 'maj7#11', '7sus4', 'm7b13', 'm7b5'];
        this.melodicMinorScaleChords = ['mMaj7', 'sus4b913', 'maj7#5', '7#11', '7b13', 'm9b5', '7alt'];
        this.majorScales = [
            {key: 'C', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']},
            {key: 'Db', notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']},
            {key: 'D', notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']},
            {key: 'Eb', notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']},
            {key: 'E', notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']},
            {key: 'F', notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E']},
            {key: 'Gb', notes: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F']},
            {key: 'G', notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#']},
            {key: 'Ab', notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']},
            {key: 'A', notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']},
            {key: 'Bb', notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']},
            {key: 'B', notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']}
        ];
        this.melodicMinorScales = [
            {key: 'C', notes: ['C', 'D', 'Eb', 'F', 'G', 'A', 'B']},
            {key: 'Db', notes: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'C']},
            {key: 'D', notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C#']},
            {key: 'Eb', notes: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'D']},
            {key: 'E', notes: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D#']},
            {key: 'F', notes: ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'E']},
            {key: 'F#', notes: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'F']},
            {key: 'G', notes: ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#']},
            {key: 'Ab', notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'G']},
            {key: 'A', notes: ['A', 'B', 'C', 'D', 'E', 'F#', 'G#']},
            {key: 'Bb', notes: ['Bb', 'C', 'Db', 'Eb', 'F', 'G', 'A']},
            {key: 'B', notes: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A#']}
        ];
    }

    getChordsOfType(chordType) {
        var position, scale;
        if (this.majorScaleChords.indexOf(chordType) != -1) {
            position = this.majorScaleChords.indexOf(chordType);
            scale = 'major';
        } else if (this.melodicMinorScaleChords.indexOf(chordType) != -1) {
            position = this.melodicMinorScaleChords.indexOf(chordType);
            scale = 'melodic minor';
        }

        if (scale === 'major') {
            return this.majorScales.map((scale) => {
                return {root: scale.notes[position], type: chordType};
            });
        } else if (scale === 'melodic minor') {
            return this.melodicMinorScales.map((scale) => {
                return {root: scale.notes[position], type: chordType};
            });
        }
    }
}