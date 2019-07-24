import toUSD from './format.js';
import crystals from './data/crystals.js';
import { getLineTotal, findProduct } from './register.js';

const renderLineItem = function(cartArrayItem) {
    const productObject = findProduct(crystals, cartArrayItem.code);
    console.log(productObject);
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = productObject.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartArrayItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(productObject.price);
    tr.appendChild(priceCell);

    const lineTotalCell = document.createElement('td');
    lineTotalCell.textContent = '$' + toUSD(getLineTotal(productObject.price, cartArrayItem.quantity));
    tr.appendChild(lineTotalCell);
    
    return tr;
};

export default renderLineItem;