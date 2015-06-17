import {ProgressionGenerator} from './ProgressionGenerator';
import './styles/app.scss';

var chordTypes = ['maj7', 'm7', 'maj7#11', '7sus4', 'm7b13', 'm7b5', 'mMaj7', 'maj7#5', '7#11', 'm9b5', '7alt']

function generateNewProgression() {
    var progression = ProgressionGenerator.generate(4, chordTypes);

    document.querySelector('.progression').innerHTML = buildHTML();

    function buildHTML() {
        var html = '';
        progression.forEach(chord => {
            html += `
                <div class="chord-container" data-chord-type="${chord.type}">
                    <div class="hover-tile hover-tile-visible">${chord.root}${chord.type}</div>
                    <div class="hover-tile hover-tile-hidden">
                        ${chord.tones.root} ${chord.tones.third} ${chord.tones.fifth} ${chord.tones.seventh}
                    </div>
                </div>`;
        });
        return html;
    }
}

function closeModal() {
    document.querySelector(".modal-state").checked = false;
}

document.querySelector('.new-progression').addEventListener('click', generateNewProgression);

document.querySelector(".modal-fade-screen").addEventListener("click", closeModal);

document.querySelector(".modal-close").addEventListener("click", closeModal);

document.querySelector(".modal-inner").addEventListener("click", (e) => {
    e.stopPropagation();
});

document.querySelector('.modal-trigger').addEventListener('click', () => {
    var checkboxes = document.querySelectorAll('.modal-content input[type=checkbox]');

    for (var i = 0; i < checkboxes.length; i++) {
        if (chordTypes.indexOf(checkboxes[i].name) != -1) {
            checkboxes[i].checked = true;
        }
    }
});

document.querySelector('.modal-inner button').addEventListener('click', () => {
    var checkedBoxes = document.querySelectorAll('.modal-content input[type=checkbox]:checked');
    chordTypes = [];
    for (var i = 0; i < checkedBoxes.length; i++) {
        chordTypes.push(checkedBoxes[i].name)
    }
    generateNewProgression();
    closeModal();
});

generateNewProgression();