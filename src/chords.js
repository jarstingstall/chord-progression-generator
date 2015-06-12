export var chordTypes = [
    {
        type: 'maj7',
        mode: 'Ionian',
        chords: [
            {root: 'C', subs: ''},
            {root: 'Db', subs: ''},
            {root: 'D', subs: ''},
            {root: 'Eb', subs: ''},
            {root: 'E', subs: ''},
            {root: 'F', subs: ''},
            {root: 'Gb', subs: ''},
            {root: 'G', subs: ''},
            {root: 'Ab', subs: ''},
            {root: 'A', subs: ''},
            {root: 'Bb', subs: ''},
            {root: 'B', subs: ''},
        ]
    },
    {
        type: 'm7',
        mode: 'Dorian',
        chords: [
            {root: 'C', subs: 'Ebmaj7, Eb/F Triads'},
            {root: 'C#', subs: 'Emaj7, E/F# Triads'},
            {root: 'D', subs: 'Fmaj7, F/G Triads'},
            {root: 'Eb', subs: 'Gbmaj7, Gb/Ab Triads'},
            {root: 'E', subs: 'Gmaj7, G/A Triads'},
            {root: 'F', subs: 'Abmaj7, Ab/Bb Triads'},
            {root: 'F#', subs: 'Amaj7, A/B Triads'},
            {root: 'G', subs: 'Bbmaj7, Bb/C Triads'},
            {root: 'Ab', subs: 'Bmaj7, B/Db Triads'},
            {root: 'A', subs: 'Cmaj7, C/D Triads'},
            {root: 'Bb', subs: 'Dbmaj7, Db/Eb Triads'},
            {root: 'B', subs: 'Dmaj7, D/E Triads'},
        ]
    },
    {
        type: 'maj7#11',
        mode: 'Lydian',
        chords: [
            {root: 'C', subs: 'Gmaj7, C/D Traids'},
            {root: 'Db', subs: 'Abmaj7, Db/Eb Triads'},
            {root: 'D', subs: 'Amaj7, D/E Triads'},
            {root: 'Eb', subs: 'Bbmaj7, Eb/F Triads'},
            {root: 'E', subs: 'Bmaj7, E/F# Triads'},
            {root: 'F', subs: 'Cmaj7, F/G Triads'},
            {root: 'Gb', subs: 'Dbmaj7, Gb/Ab Triads'},
            {root: 'G', subs: 'Dmaj7, G/A Triads'},
            {root: 'Ab', subs: 'Ebmaj7, Ab/Bb Triads'},
            {root: 'A', subs: 'Emaj7, A/B Triads'},
            {root: 'Bb', subs: 'Fmaj7, Bb/C Triads'},
            {root: 'B', subs: 'F#maj7, B/C# Triads'},
        ]
    },
    {
        type: '7sus4',
        mode: 'Mixolydian',
        chords: [
            {root: 'C', subs: 'Gm7, Bbmaj7, Bb/C Triads'},
            {root: 'Db', subs: 'Abm7, Bmaj7, B/Db Triads'},
            {root: 'D', subs: 'Am7, Cmaj7, C/D Triads'},
            {root: 'Eb', subs: 'Bbm7, Dbmaj7, Db/Eb Triads'},
            {root: 'E', subs: 'Bm7, Dmaj7, D/E Triads'},
            {root: 'F', subs: 'Cm7, Ebmaj7, Eb/F Triad'},
            {root: 'F#', subs: 'C#m7, Emaj7, E/F# Triads'},
            {root: 'G', subs: 'Dm7, Fmaj7, F/G Triads'},
            {root: 'Ab', subs: 'Ebm7, Gbmaj7, Gb/Ab Triads'},
            {root: 'A', subs: 'Em7, Gmaj7, G/A Triads'},
            {root: 'Bb', subs: 'Fm7, Abmaj7, Ab/Bb Triads'},
            {root: 'B', subs: 'F#m7, Amaj7, A/B Triads'},
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