import { getLineTotal, findByCode, getOrderTotal } from '../src/register.js';
import crystals from '../src/data/crystals.js';
import cart from '../src/data/order.js';

const test = QUnit.test;

QUnit.module('register');

test('get line total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 5;
    const expected = 15;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getLineTotal(price, quantity);


    //Assert
    assert.equal(result, expected);
});

test('find product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const toFindCode = 'amethyst';
    const expected = {
        code: 'amethyst',
        name: 'Amethyst',
        image: 'assets/amethyst.jpg',
        description: 'purple and amazing',
        category: 'quartz',
        price: 5.00,
        cost: 3.00
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findByCode(crystals, toFindCode);


    //Assert
    assert.deepEqual(result, expected);
});

test('get order total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 51;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getOrderTotal(cart, crystals);


    //Assert
    assert.equal(result, expected);
});