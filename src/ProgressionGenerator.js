import {HarmonyManager} from './HarmonyManager';

export class ProgressionGenerator {

    static generate(count, types) {
        var collection = [],
            progression = [],
            index,
            harmonyManager = new HarmonyManager();

        types.forEach(type => {
            collection = collection.concat(harmonyManager.getChordsOfType(type));
        });

        for (var i = 0; i < count; i++) {
            index = Math.floor(Math.random() * collection.length);
            progression.push(collection[index]);
            collection.splice(index, 1);
        }

        return progression.map((chord) => {
            return harmonyManager.setChordTones(chord);
        });
    }

}