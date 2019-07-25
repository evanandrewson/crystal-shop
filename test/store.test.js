import store from '../src/data/store.js';
import crystals from '../src/data/crystals.js';

const test = QUnit.test;

QUnit.module('Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('store uses session storage', assert => {
    // arrange
    
    // act
    
    // assert
    assert.equal(store.storage, window.sessionStorage);
});

test('save/get method for store', assert => {
    // arrange
    const testObject = {
        code: 'amethyst',
        name: 'Amethyst',
        image: 'assets/amethyst.jpg',
        description: 'purple and amazing',
        category: 'quartz',
        price: 5.00,
        cost: 3.00
    };
    const key = 'crystal';

    // act
    store.save(key, testObject);
    const retrieved = store.get(key);
    
    // assert
    assert.deepEqual(testObject, retrieved);
});

test('get products with bootstrapped default', assert => {
    // arrange
    // uses imported crystals array

    // act
    const result = store.getProducts();
    
    // assert
    assert.deepEqual(crystals, result);
});

test('get shopping cart returns empty array when empty', assert => {
    //arrange
    const expected = [];
    
    // act
    const shoppingCart = store.getShoppingCart();
    
    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('add product to empty cart', assert => {
    //arrange
    const expected = [{
        code: 'labradorite',
        quantity: 1
    }];
    
    // act
    store.addToCart('labradorite');
    const shoppingCart = store.getShoppingCart();
    
    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('add product already in cart', assert => {
    //arrange
    const expected = [{
        code: 'labradorite',
        quantity: 2
    }];
    
    // act
    store.addToCart('labradorite');
    store.addToCart('labradorite');
    const shoppingCart = store.getShoppingCart();
    
    // assert
    assert.deepEqual(shoppingCart, expected);
});