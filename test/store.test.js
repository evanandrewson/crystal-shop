import store from '../src/data/store.js';

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

test('save/get', assert => {
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
    const expected = store.get(key);
    
    // assert
    assert.deepEqual(testObject, expected);
});