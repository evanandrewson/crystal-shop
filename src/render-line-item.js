import toUSD from './format.js';
import { getLineTotal } from './register.js';
import store from './data/store.js';

const renderLineItem = function(cartArrayItem) {
    const productObject = store.getProduct(cartArrayItem.code);
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