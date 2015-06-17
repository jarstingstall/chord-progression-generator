import {KeyManager} from './KeyManager';

export class ProgressionGenerator {

    static generate(count, types) {
        var collection = [],
            progression = [],
            index,
            keyManager = new KeyManager();

        types.forEach(type => {
            collection = collection.concat(keyManager.getChordsOfType(type));
        });

        for (var i = 0; i < count; i++) {
            index = Math.floor(Math.random() * collection.length);
            progression.push(collection[index]);
            collection.splice(index, 1);
        }

        return progression;
    }

}