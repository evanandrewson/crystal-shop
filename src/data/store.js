import crystals from './crystals.js';
import { findProduct } from '../register.js';

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
    addToCart(code, quantity) {
        const shoppingCart = store.getShoppingCart();

        let lineItem = findProduct(shoppingCart, code);
        if(lineItem) {
            if(quantity) {
                lineItem.quantity += quantity;
            } else {
                lineItem.quantity++;
            }
            
        } else {
            if(quantity) {
                lineItem = {
                    code: code,
                    quantity: quantity
                };
                shoppingCart.push(lineItem);
            } else {
                lineItem = {
                    code: code,
                    quantity: 1
                };
                shoppingCart.push(lineItem);
            }
        }
        
        store.save('shopping-cart', shoppingCart);
    }
};

export default store;