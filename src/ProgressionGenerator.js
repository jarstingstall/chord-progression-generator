import {chords} from './chords';

export class ProgressionGenerator {

    static generate(count, types) {
        var collection = [],
            progression = [],
            index;

        types.forEach(type => {
            collection = collection.concat(chords[type]);
        });

        for (var i = 0; i < count; i++) {
            index = Math.floor(Math.random() * collection.length);
            progression.push(collection[index]);
            collection.splice(index, 1);
        }

        return progression;
    }

}