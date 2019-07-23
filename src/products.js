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

const quartzNodeList = document.querySelectorAll('li.quartz');
const feldsparNodeList = document.querySelectorAll('li.feldspar');
const metamorphicNodeList = document.querySelectorAll('li.metamorphic');
const mineralNodeList = document.querySelectorAll('li.mineral');
const crystalNodeList = document.querySelectorAll('li');

quartzButton.addEventListener('click', () => {
    hideCrystals();
    for(let i = 0; i < quartzNodeList.length; i++) {
        quartzNodeList[i].classList.remove('hidden');
    }
});

feldsparButton.addEventListener('click', () => {
    hideCrystals();
    for(let i = 0; i < feldsparNodeList.length; i++) {
        feldsparNodeList[i].classList.remove('hidden');
    }
});

metamorphicButton.addEventListener('click', () => {
    hideCrystals();
    for(let i = 0; i < metamorphicNodeList.length; i++) {
        metamorphicNodeList[i].classList.remove('hidden');
    }
});

mineralButton.addEventListener('click', () => {
    hideCrystals();
    for(let i = 0; i < mineralNodeList.length; i++) {
        mineralNodeList[i].classList.remove('hidden');
    }
});

showAllButton.addEventListener('click', () => {
    for(let i = 0; i < crystalNodeList.length; i++) {
        crystalNodeList[i].classList.remove('hidden');
    }
});

function hideCrystals() {
    for(let i = 0; i < crystalNodeList.length; i++) {
        crystalNodeList[i].className = 'hidden';
    }
}
