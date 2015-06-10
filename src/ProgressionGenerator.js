import {chordTypes} from './chords';
import {Chord} from './Chord';
import find from 'lodash/collection/find';

export class ProgressionGenerator {

    static generate(count, types) {
        var collection = [],
            progression = [],
            index;

        types.forEach(type => {
            var foundType = find(chordTypes, {type: type});
            foundType.chords.forEach(chord => {
                collection.push(new Chord({
                    type: foundType.type,
                    mode: foundType.mode,
                    parentTonality: foundType.parentTonality,
                    root: chord.root,
                    parentKey: chord.parentKey
                }));
            });
        });

        for (var i = 0; i < count; i++) {
            index = Math.floor(Math.random() * collection.length);
            progression.push(collection[index]);
            collection.splice(index, 1);
        }

        return progression;
    }

}