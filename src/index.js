import {ProgressionGenerator} from './ProgressionGenerator';
import './styles/app.scss';

function generateNewProgression() {
    var progression = ProgressionGenerator.generate(
        4, 
        ['maj7', 'm7', 'maj7#11', '7sus4']
    );

    document.querySelector('.progression').innerHTML = buildHTML();

    function buildHTML() {
        var html = '';
        progression.forEach(chord => {
            html += `
                <div class="chord-container" data-chord-type="${chord.type}">
                    <div class="hover-tile hover-tile-visible">${chord.root}${chord.type}</div>
                    <div class="hover-tile hover-tile-hidden">
                        <p>${chord.root} ${chord.mode}</p>
                        <p>${chord.subs}</p>
                    </div>
                </div>`;
        });
        return html;
    }
}

document.querySelector('.new-progression').addEventListener('click', generateNewProgression);

generateNewProgression();