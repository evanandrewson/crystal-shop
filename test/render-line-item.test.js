import renderLineItem from '../src/render-line-item.js';
//import crystals from '../src/data/crystals.js';
//import { findProduct } from '../src/register.js';

const test = QUnit.test;

QUnit.module('render line item');

test('render line item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cartArrayItem = {
        code: 'amethyst',
        quantity: 3
    };
    
    const expected = '<tr><td>Amethyst</td><td>3</td><td>$5.00</td><td>$15.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderLineItem(cartArrayItem).outerHTML;


    //Assert
    assert.equal(result, expected);
});