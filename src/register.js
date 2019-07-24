export const getLineTotal = function(price, quantity) {
    return Number(price * quantity).toFixed(2);
};

export const findProduct = function(crystals, code) {
    for(let i = 0; i < crystals.length; i++) {
        const crystal = crystals[i];
        if(crystal.code === code) {
            return crystal;
        }
    }
    return null;
};

export const getOrderTotal = function(cart, crystals) {
    let orderTotal = 0;
    for(let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const product = findProduct(crystals, cartItem.code);
        const productLineTotal = getLineTotal(product.price, cartItem.quantity);
        orderTotal += Number(productLineTotal);
    }
    return orderTotal;
};