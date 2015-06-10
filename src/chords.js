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


    // mMaj7: ['CmMaj7', 'DbmMaj7', 'DmMaj7', 'EbmMaj7', 'EmMaj7', 'FmMaj7', 'F#mMaj7', 'GmMaj7', 'AbmMaj7', 'AmMaj7', 'BbmMaj7', 'BmMaj7'],
    // "maj7#5": ['Cmaj7#5', 'Dbmaj7#5', 'Dmaj7#5', 'Ebmaj7#5', 'Emaj7#5', 'Fmaj7#5', 'Gbmaj7#5', 'Gmaj7#5', 'Abmaj7#5', 'Amaj7#5', 'Bbmaj7#5', 'Bmaj7#5'],
    // "7#11": ['C7#11', 'Db7#11', 'D7#11', 'Eb7#11', 'E7#11', 'F7#11', 'Gb7#11', 'G7#11', 'Ab7#11', 'A7#11', 'Bb7#11', 'B7#11'],
    // m9b5: ['Cm9b5', 'C#m9b5', 'Dm9b5', 'D#m9b5', 'Em9b5', 'Fm9b5', 'F#m9b5', 'Gm9b5', 'G#m9b5', 'Am9b5', 'Bbm9b5', 'Bm9b5'],
    // "7alt": ['C7alt', 'Db7alt', 'D7alt', 'Eb7alt', 'E7alt', 'F7alt', 'Gb7alt', 'G7alt', 'Ab7alt', 'A7alt', 'Bb7alt', 'B7alt'],

    // "13b9": ['C13b9', 'Db13b9', 'D13b9', 'Eb13b9', 'E13b9', 'F13b9', 'Gb13b9', 'G13b9', 'Ab13b9', 'A13b9', 'Bb13b9', 'B13b9']

];