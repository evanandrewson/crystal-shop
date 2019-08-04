import renderCrystal from '../src/render-crystal.js';

const test = QUnit.test;

QUnit.module('renderCrystal');

test('renders a crystal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const amethyst = {
        code: 'amethyst',
        name: 'Amethyst',
        image: '../assets/amethyst.jpg',
        description: 'purple and amazing',
        category: 'quartz',
        price: 5.00,
        cost: 3.00
    };
    const expected = '<li class="quartz" title="purple and amazing"><h3>Amethyst</h3><img src="../assets/amethyst.jpg" alt="Amethyst image"><p class="price">$5.00</p><button value="amethyst">Add</button></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderCrystal(amethyst).outerHTML;


    //Assert
    assert.equal(result, expected);
});