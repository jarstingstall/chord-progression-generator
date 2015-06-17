export var chordTypes = [
    {
        type: 'maj7',
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
        chords: [
            {root: 'C', subs: 'Abmaj7, Ab/Bb Triads'},
            {root: 'C#', subs: 'Amaj7, A/B Triads'},
            {root: 'D', subs: 'Bbmaj7, Bb/C Triads'},
            {root: 'D#', subs: 'Bmaj7, B/Db Triads'},
            {root: 'E', subs: 'Cmaj7, C/D Triads'},
            {root: 'F', subs: 'Dbmaj7, Db/Eb Triads'},
            {root: 'F#', subs: 'Dmaj7, D/E Triads'},
            {root: 'G', subs: 'Ebmaj7, Eb/F Triad'},
            {root: 'G#', subs: 'Emaj7, E/F# Triads'},
            {root: 'A', subs: 'Fmaj7, F/G Triads'},
            {root: 'Bb', subs: 'Gbmaj7, Gb/Ab Triads'},
            {root: 'B', subs: 'Gmaj7, G/A Triads'},
        ]
    },
    {
        type: 'm7b5',
        chords: [
            {root: 'C', subs: 'Ebm7, Gbmaj7, Gb/Ab Triads'},
            {root: 'C#', subs: 'Em7, Gmaj7, G/A Triads'},
            {root: 'D', subs: 'Fm7, Abmaj7, Ab/Bb Triads'},
            {root: 'D#', subs: 'F#m7, Amaj7, A/B Triads'},
            {root: 'E', subs: 'Gm7, Bbmaj7, Bb/C Triads'},
            {root: 'F', subs: 'Abm7, Bmaj7, B/Db Triads'},
            {root: 'F#', subs: 'Am7, Cmaj7, C/D Triads'},
            {root: 'G', subs: 'Bbm7, Dbmaj7, Db/Eb Triads'},
            {root: 'G#', subs: 'Bm7, Dmaj7, D/E Triads'},
            {root: 'A', subs: 'Cm7, Ebmaj7, Eb/F Triad'},
            {root: 'Bb', subs: 'C#m7, Emaj7, E/F# Triads'},
            {root: 'B', subs: 'Dm7, Fmaj7, F/G Triads'},
        ]
    },
    {
        type: 'mMaj7',
        chords: [
            {root: 'C', subs: 'Ebmaj7#5, F/G Triads'},
            {root: 'Db', subs: 'Emaj7#5, Gb/Ab Triads'},
            {root: 'D', subs: 'Fmaj7#5, G/A Triads'},
            {root: 'Eb', subs: 'Gbmaj7#5, Ab/Bb Triads'},
            {root: 'E', subs: 'Gmaj7#5, A/B Triads'},
            {root: 'F', subs: 'Abmaj7#5, Bb/C Triads'},
            {root: 'F#', subs: 'Amaj7#5, B/C# Triads'},
            {root: 'G', subs: 'Bbmaj7#5, C/D Triads'},
            {root: 'Ab', subs: 'Bmaj7#5, Db/Eb Triads'},
            {root: 'A', subs: 'Cmaj7#5, D/E Triads'},
            {root: 'Bb', subs: 'Dbmaj7#5, Eb/F Triads'},
            {root: 'B', subs: 'Dmaj7#5, E/F# Triads'},
        ]
    },

    {
        type: 'maj7#5',
        chords: [
            {root: 'C', subs: 'AmMaj7, D/E Triads'},
            {root: 'Db', subs: 'BbmMaj7, Eb/F Triads'},
            {root: 'D', subs: 'BmMaj7, E/F# Triads'},
            {root: 'Eb', subs: 'CmMaj7, F/G Triads'},
            {root: 'E', subs: 'C#mMaj7, Gb/Ab Triads'},
            {root: 'F', subs: 'DmMaj7, G/A Triads'},
            {root: 'Gb', subs: 'EbmMaj7, Ab/Bb Triads'},
            {root: 'G', subs: 'EmMaj7, A/B Triads'},
            {root: 'Ab', subs: 'FmMaj7, Bb/C Triads'},
            {root: 'A', subs: 'F#mMaj7, B/C# Triads'},
            {root: 'Bb', subs: 'GmMaj7, C/D Triads'},
            {root: 'B', subs: 'AbmMaj7, Db/Eb Triads'},
        ]
    },

    {
        type: '7#11',
        chords: [
            {root: 'C', subs: 'GmMaj7, Bbmaj7#5, C/D Triads'},
            {root: 'Db', subs: 'AbmMaj7, Bmaj7#5, Db/Eb Triads'},
            {root: 'D', subs: 'AmMaj7, Cmaj7#5, D/E Triads'},
            {root: 'Eb', subs: 'BbmMaj7, Dbmaj7#5, Eb/F Triads'},
            {root: 'E', subs: 'BmMaj7, Dmaj7#5, E/F# Triads'},
            {root: 'F', subs: 'CmMaj7, Ebmaj7#5, F/G Triads'},
            {root: 'Gb', subs: 'DbmMaj7, Emaj7#5, Gb/Ab Triads'},
            {root: 'G', subs: 'DmMaj7, Fmaj7#5, G/A Triads'},
            {root: 'Ab', subs: 'EbmMaj7, Gbmaj7#5, Ab/Bb Triads'},
            {root: 'A', subs: 'EmMaj7, Gmaj7#5, A/B Triads'},
            {root: 'Bb', subs: 'FmMaj7, Abmaj7#5, Bb/C Triads'},
            {root: 'B', subs: 'F#mMaj7, Amaj7#5, B/C# Triads'},
        ]
    },
    {
        type: 'm9b5',
        chords: [
            {root: 'C', subs: 'EbmMaj7, Gbmaj7#5, Ab/Bb Triads'},
            {root: 'C#', subs: 'EmMaj7, Gmaj7#5, A/B Triads'},
            {root: 'D', subs: 'FmMaj7, Abmaj7#5, Bb/C Triads'},
            {root: 'Eb', subs: 'F#mMaj7, Amaj7#5, B/C# Triads'},
            {root: 'E', subs: 'GmMaj7, Bbmaj7#5, C/D Triads'},
            {root: 'F', subs: 'AbmMaj7, Bmaj7#5, Db/Eb Triads'},
            {root: 'F#', subs: 'AmMaj7, Cmaj7#5, D/E Triads'},
            {root: 'G', subs: 'BbmMaj7, Dbmaj7#5, Eb/F Triads'},
            {root: 'G#', subs: 'BmMaj7, Dmaj7#5, E/F# Triads'},
            {root: 'A', subs: 'CmMaj7, Ebmaj7#5, F/G Triads'},
            {root: 'Bb', subs: 'DbmMaj7, Emaj7#5, Gb/Ab Triads'},
            {root: 'B', subs: 'DmMaj7, Fmaj7#5, G/A Triads'},
        ]
    },
    {
        type: '7alt',
        chords: [
            {root: 'C', subs: 'DbmMaj7, Emaj7#5, Gb/Ab Triads'},
            {root: 'Db', subs: 'DmMaj7, Fmaj7#5, G/A Triads'},
            {root: 'D', subs: 'EbmMaj7, Gbmaj7#5, Ab/Bb Triads'},
            {root: 'Eb', subs: 'EmMaj7, Gmaj7#5, A/B Triads'},
            {root: 'E', subs: 'FmMaj7, Abmaj7#5, Bb/C Triads'},
            {root: 'F', subs: 'F#mMaj7, Amaj7#5, B/C# Triads'},
            {root: 'Gb', subs: 'GmMaj7, Bbmaj7#5, C/D Triads'},
            {root: 'G', subs: 'AbmMaj7, Bmaj7#5, Db/Eb Triads'},
            {root: 'Ab', subs: 'AmMaj7, Cmaj7#5, D/E Triads'},
            {root: 'A', subs: 'BbmMaj7, Dbmaj7#5, Eb/F Triads'},
            {root: 'Bb', subs: 'BmMaj7, Dmaj7#5, E/F# Triads'},
            {root: 'B', subs: 'CmMaj7, Ebmaj7#5, F/G Triads'},
        ]
    },

];