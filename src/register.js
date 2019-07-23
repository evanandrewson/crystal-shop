import cart from './data/order.js';
import crystals from './data/crystals.js';

export const getLineTotal = function(price, quantity) {
    return Number(price * quantity).toFixed(2);
};
