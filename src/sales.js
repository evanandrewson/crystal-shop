import { getOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import toUSD from './format.js';
import store from './data/store.js';

const sales = store.getSales();
const products = store.getProducts();

for(let i = 0; i < sales.length; i++) {
    const tbody = document.querySelector('tbody');
    const tr = renderLineItem(sales[i]);
    tbody.appendChild(tr);
}

const orderTotalCell = document.getElementById('order-total');
orderTotalCell.textContent = toUSD(getOrderTotal(sales, products));