import renderCrystal from './render-crystal.js';
import crystals from './data/crystals.js';

const crystalList = document.getElementById('crystals');

for(let i = 0; i < crystals.length; i++) {
    const crystalListItem = renderCrystal(crystals[i]);
    crystalList.appendChild(crystalListItem);
}

const quartzButton = document.getElementById('quartz-button');
const feldsparButton = document.getElementById('feldspar-button');
const metamorphicButton = document.getElementById('metamorphic-button');
const mineralButton = document.getElementById('mineral-button');
const showAllButton = document.getElementById('show-all-button');

quartzButton.addEventListener('click', () => {
    const quartzList = document.querySelectorAll('li.quartz');
    hideCrystals();
    console.log(quartzList);
    for(let i = 0; i < quartzList.length; i++) {
        quartzList[i].classList.remove('hidden');
    }
});

function hideCrystals() {
    const crystalNodeList = document.querySelectorAll('li');
    for(let i = 0; i < crystalNodeList.length; i++) {
        crystalNodeList[i].className = 'hidden';
    }
}
