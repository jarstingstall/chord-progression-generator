import {ProgressionGenerator} from './ProgressionGenerator';
import './styles/app.scss';

var progression = ProgressionGenerator.generate(
    4, 
    ['maj7', 'm7', 'maj7#11', '7sus4', 'm7b13', 'm7b5']
);

document.querySelector('.progression').innerHTML = buildHTML();

function buildHTML() {
    var html = '';
    progression.forEach(chord => {
        html += `<div class="chord" data-chord-type="${chord.type}"><p>${chord.symbol}</p></div>`;
    });
    return html;
}