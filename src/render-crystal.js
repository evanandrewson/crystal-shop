import toUSD from './format.js';
import store from './data/store.js';

const renderCrystal = function(crystal) {
    const li = document.createElement('li');
    li.className = crystal.category;
    li.title = crystal.description;

    const h3 = document.createElement('h3');
    h3.textContent = crystal.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = crystal.image;
    img.alt = crystal.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    li.appendChild(p);

    const priceInDollars = toUSD(crystal.price);
    const priceNode = document.createTextNode(priceInDollars);
    p.appendChild(priceNode);

    const button = document.createElement('button');
    button.value = crystal.code;
    const buttonTextNode = document.createTextNode('Add');
    button.addEventListener('click', () => {
        store.addToCart(crystal.code);
        store.placeOrder(crystal.code);
    });
    button.appendChild(buttonTextNode);
    li.appendChild(button);

    return li;

};

export default renderCrystal;