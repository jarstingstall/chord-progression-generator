export var chordTypes = [
    {
        type: 'maj7',
        mode: {
            name: 'Ionian',
            order: 1
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'C'},
            {root: 'Db', parentKey: 'Db'},
            {root: 'D', parentKey: 'D'},
            {root: 'Eb', parentKey: 'Eb'},
            {root: 'E', parentKey: 'E'},
            {root: 'F', parentKey: 'F'},
            {root: 'Gb', parentKey: 'Gb'},
            {root: 'G', parentKey: 'G'},
            {root: 'Ab', parentKey: 'Ab'},
            {root: 'A', parentKey: 'A'},
            {root: 'Bb', parentKey: 'Bb'},
            {root: 'B', parentKey: 'B'},
        ]
    },
    {
        type: 'm7',
        mode: {
            name: 'Dorian',
            order: 2
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'Bb'},
            {root: 'C#', parentKey: 'B'},
            {root: 'D', parentKey: 'C'},
            {root: 'Eb', parentKey: 'Db'},
            {root: 'E', parentKey: 'D'},
            {root: 'F', parentKey: 'Eb'},
            {root: 'F#', parentKey: 'E'},
            {root: 'G', parentKey: 'F'},
            {root: 'Ab', parentKey: 'Gb'},
            {root: 'A', parentKey: 'G'},
            {root: 'Bb', parentKey: 'Ab'},
            {root: 'B', parentKey: 'A'},
        ]
    },
    {
        type: 'maj7#11',
        mode: {
            name: 'Lydian',
            order: 4
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'G'},
            {root: 'Db', parentKey: 'Ab'},
            {root: 'D', parentKey: 'A'},
            {root: 'Eb', parentKey: 'Bb'},
            {root: 'E', parentKey: 'B'},
            {root: 'F', parentKey: 'C'},
            {root: 'Gb', parentKey: 'Db'},
            {root: 'G', parentKey: 'D'},
            {root: 'Ab', parentKey: 'Eb'},
            {root: 'A', parentKey: 'E'},
            {root: 'Bb', parentKey: 'F'},
            {root: 'B', parentKey: 'Gb'},
        ]
    },
    {
        type: '7sus4',
        mode: {
            name: 'Mixolydian',
            order: 5
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'F'},
            {root: 'Db', parentKey: 'Gb'},
            {root: 'D', parentKey: 'G'},
            {root: 'Eb', parentKey: 'Ab'},
            {root: 'E', parentKey: 'A'},
            {root: 'F', parentKey: 'Bb'},
            {root: 'F#', parentKey: 'B'},
            {root: 'G', parentKey: 'C'},
            {root: 'Ab', parentKey: 'Db'},
            {root: 'A', parentKey: 'D'},
            {root: 'Bb', parentKey: 'Eb'},
            {root: 'B', parentKey: 'E'},
        ]
    },
    {
        type: 'm7b13',
        mode: {
            name: 'Aeolian',
            order: 6
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'Eb'},
            {root: 'C#', parentKey: 'E'},
            {root: 'D', parentKey: 'F'},
            {root: 'Eb', parentKey: 'Gb'},
            {root: 'E', parentKey: 'G'},
            {root: 'F', parentKey: 'Ab'},
            {root: 'F#', parentKey: 'A'},
            {root: 'G', parentKey: 'Bb'},
            {root: 'G#', parentKey: 'B'},
            {root: 'A', parentKey: 'C'},
            {root: 'Bb', parentKey: 'Db'},
            {root: 'B', parentKey: 'D'},
        ]
    },
    {
        type: 'm7b5',
        mode: {
            name: 'Locrian',
            order: 7
        },
        parentTonality: 'Major',
        chords: [
            {root: 'C', parentKey: 'Db'},
            {root: 'C#', parentKey: 'D'},
            {root: 'D', parentKey: 'Eb'},
            {root: 'D#', parentKey: 'E'},
            {root: 'E', parentKey: 'F'},
            {root: 'F', parentKey: 'Gb'},
            {root: 'F#', parentKey: 'G'},
            {root: 'G', parentKey: 'Ab'},
            {root: 'G#', parentKey: 'A'},
            {root: 'A', parentKey: 'Bb'},
            {root: 'Bb', parentKey: 'B'},
            {root: 'B', parentKey: 'C'},
        ]
    },
    {
        type: 'mMaj7',
        mode: {
            name: 'Melodic Minor',
            order: 1
        },
        parentTonality: 'Melodic Minor',
        chords: [
            {root: 'C', parentKey: 'C'},
            {root: 'Db', parentKey: 'Db'},
            {root: 'D', parentKey: 'D'},
            {root: 'Eb', parentKey: 'Eb'},
            {root: 'E', parentKey: 'E'},
            {root: 'F', parentKey: 'F'},
            {root: 'F#', parentKey: 'F#'},
            {root: 'G', parentKey: 'G'},
            {root: 'Ab', parentKey: 'Ab'},
            {root: 'A', parentKey: 'A'},
            {root: 'Bb', parentKey: 'Bb'},
            {root: 'B', parentKey: 'B'},
        ]
    },

    {
        type: 'maj7#5',
        mode: {
            name: 'Lydian Augmented',
            order: 3
        },
        parentTonality: 'Melodic Minor',
        chords: [
            {root: 'C', parentKey: 'A'},
            {root: 'Db', parentKey: 'Bb'},
            {root: 'D', parentKey: 'B'},
            {root: 'Eb', parentKey: 'C'},
            {root: 'E', parentKey: 'C#'},
            {root: 'F', parentKey: 'D'},
            {root: 'Gb', parentKey: 'Eb'},
            {root: 'G', parentKey: 'E'},
            {root: 'Ab', parentKey: 'F'},
            {root: 'A', parentKey: 'F#'},
            {root: 'Bb', parentKey: 'G'},
            {root: 'B', parentKey: 'G#'},
        ]
    },

    {
        type: '7#11',
        mode: {
            name: 'Lydian Dominant',
            order: 4
        },
        parentTonality: 'Melodic Minor',
        chords: [
            {root: 'C', parentKey: 'G'},
            {root: 'Db', parentKey: 'Ab'},
            {root: 'D', parentKey: 'A'},
            {root: 'Eb', parentKey: 'Bb'},
            {root: 'E', parentKey: 'B'},
            {root: 'F', parentKey: 'C'},
            {root: 'Gb', parentKey: 'Db'},
            {root: 'G', parentKey: 'D'},
            {root: 'Ab', parentKey: 'Eb'},
            {root: 'A', parentKey: 'E'},
            {root: 'Bb', parentKey: 'F'},
            {root: 'B', parentKey: 'Ab'},
        ]
    },
    {
        type: 'm9b5',
        mode: {
            name: 'Locrian Natural 9',
            order: 6
        },
        parentTonality: 'Melodic Minor',
        chords: [
            {root: 'C', parentKey: 'Eb'},
            {root: 'C#', parentKey: 'E'},
            {root: 'D', parentKey: 'F'},
            {root: 'D#', parentKey: 'F#'},
            {root: 'E', parentKey: 'G'},
            {root: 'F', parentKey: 'Ab'},
            {root: 'F#', parentKey: 'A'},
            {root: 'G', parentKey: 'Bb'},
            {root: 'G#', parentKey: 'B'},
            {root: 'A', parentKey: 'C'},
            {root: 'Bb', parentKey: 'Db'},
            {root: 'B', parentKey: 'D'},
        ]
    },
    {
        type: '7alt',
        mode: {
            name: 'Altered Dominant',
            order: 7
        },
        parentTonality: 'Melodic Minor',
        chords: [
            {root: 'C', parentKey: 'Db'},
            {root: 'Db', parentKey: 'D'},
            {root: 'D', parentKey: 'Eb'},
            {root: 'Eb', parentKey: 'E'},
            {root: 'E', parentKey: 'F'},
            {root: 'F', parentKey: 'F#'},
            {root: 'Gb', parentKey: 'G'},
            {root: 'G', parentKey: 'Ab'},
            {root: 'Ab', parentKey: 'A'},
            {root: 'A', parentKey: 'Bb'},
            {root: 'Bb', parentKey: 'B'},
            {root: 'B', parentKey: 'C'},
        ]
    },

    // "13b9": ['C13b9', 'Db13b9', 'D13b9', 'Eb13b9', 'E13b9', 'F13b9', 'Gb13b9', 'G13b9', 'Ab13b9', 'A13b9', 'Bb13b9', 'B13b9']

];