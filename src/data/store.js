import crystals from './crystals.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json); 
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get('products');
        if(!products) {
            store.save('products', crystals);
            products = crystals;
        }
        return products;
    },
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    addToCart(code) {
        const shoppingCart = store.getShoppingCart();
        const newLineItem = {
            code: code,
            quantity: 1
        };
        shoppingCart.push(newLineItem);
        store.save('shopping-cart', shoppingCart);
    }
};

export default store;