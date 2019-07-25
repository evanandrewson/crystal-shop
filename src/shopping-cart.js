import crystals from './data/crystals.js';
import { getOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import toUSD from './format.js';
import store from './data/store.js';

const cart = store.getShoppingCart();

for(let i = 0; i < cart.length; i++) {
    const tbody = document.querySelector('tbody');
    const tr = renderLineItem(cart[i]);
    tbody.appendChild(tr);
}

const orderTotalCell = document.getElementById('order-total');
orderTotalCell.textContent = toUSD(getOrderTotal(cart, crystals));