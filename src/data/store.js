import crystals from './crystals.js';
import { findByCode } from '../register.js';

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
    getProduct(code) {
        const products = store.getProducts();
        const product = findByCode(products, code);
        return product;
    },
    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save('products', products);
    },
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    getSales() {
        let sales = store.get('sales');
        if(!sales) {
            sales = [];
        }
        return sales;
    },
    addToCart(code, quantity) {
        const shoppingCart = store.getShoppingCart();

        addLineItem(shoppingCart, code, quantity);
        
        store.save('shopping-cart', shoppingCart);
    },
    placeOrder(code, quantity) {
        const sales = store.getSales();

        addLineItem(sales, code, quantity);
        
        store.save('sales', sales);
    }
};

export default store;

function addLineItem(dataArray, code, quantity) {
    let lineItem = findByCode(dataArray, code);
    if(lineItem) {
        if(quantity) {
            lineItem.quantity += quantity;
        }
        else {
            lineItem.quantity++;
        }
    }
    else {
        if(quantity) {
            lineItem = {
                code: code,
                quantity: quantity
            };
            dataArray.push(lineItem);
        }
        else {
            lineItem = {
                code: code,
                quantity: 1
            };
            dataArray.push(lineItem);
        }
    }
}
