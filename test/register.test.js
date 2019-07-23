import { getLineTotal } from '../src/register.js';

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
