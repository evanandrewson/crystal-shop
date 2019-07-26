import store from './data/store.js';

const form = document.getElementById('product-entry');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newProduct = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: +formData.get('price'),
        cost: +formData.get('cost')
    };
    store.addProduct(newProduct);
    alert('product saved');
    form.reset();
});


/*code: 'amethyst',
name: 'Amethyst',
image: 'assets/amethyst.jpg',
description: 'purple and amazing',
category: 'quartz',
price: 5.00,
cost: 3.00 */