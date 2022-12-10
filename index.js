const ProductManager = require('./entrega01.js')

const manager = new ProductManager('products.json')

     (async () => {
        await manager.addProducts({
            title: 'Mouse Razer',
            description: 'eathadder V2 Lite',
            price: 150,
            thumbnail: 'Sin Imagen',
            code: '123abc',
            stock: 20
        })

        console.log(await manager.getProducts());

    })()