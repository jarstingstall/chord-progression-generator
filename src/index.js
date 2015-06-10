import {ProgressionGenerator} from './ProgressionGenerator';
import './styles/app.scss';

var progression = ProgressionGenerator.generate(
    4, 
    ['maj7', 'm7', 'maj7#11', '7sus4', 'm7b5']
);

console.log(progression);