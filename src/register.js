export const getLineTotal = function(price, quantity) {
    return Number(price * quantity).toFixed(2);
};

export const findByCode = function(array, code) {
    for(let i = 0; i < array.length; i++) {
        const arrayItem = array[i];
        if(arrayItem.code === code) {
            return arrayItem;
        }
    }
    return null;
};

export const getOrderTotal = function(cart, crystals) {
    let orderTotal = 0;
    for(let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const product = findByCode(crystals, cartItem.code);
        const productLineTotal = getLineTotal(product.price, cartItem.quantity);
        orderTotal += Number(productLineTotal);
    }
    return orderTotal;
};