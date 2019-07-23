import renderCrystal from './render-crystal.js';
import crystals from './data/crystals.js';

const crystalList = document.getElementById('crystals');

for(let i = 0; i < crystals.length; i++) {
    const crystalListItem = renderCrystal(crystals[i]);
    crystalList.appendChild(crystalListItem);
}