import renderCrystals from '../src/render-crystals.js';

const test = QUnit.test;

test('renders a crystal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const amethyst = {
        code: 'amethyst',
        name: 'Amethyst',
        image: 'assets/amethyst.jpg',
        description: 'purple and amazing',
        category: 'quartz',
        price: 5.00,
        cost: 3.00
    };
    const expected = '<li><h3>Amethyst</h3><img src="assets/amethyst.jpg" alt="amethyst image"><p>$10.00</p><button value="amethyst">Add</button></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderCrystals(amethyst);

    //Assert
    assert.equal(result, expected);
});