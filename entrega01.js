class ProductManager {

    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products }
    getProductID = () => {
        const count = this.products.length
        if (count == 0) return 1;

        const lastEvent = this.products[count - 1]
        const lastID = lastEvent.id
        const productID = lastID + 1

        return productID;
    }
    getProductByID = (productID) => {
        const productFound = this.products.find(e => e.id == productID)
        if (productFound) {
            console.log("This produtc is: ", productFound.title)
        } else { console.log("Not Found"); }
    }

    addproducts = (title, description, price, thumbnail, code, stock) => {
        const id = this.getProductID()
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const codeDuplicated = (element) => element.code == product.code
        if (!this.products.some(codeDuplicated)) {
            this.products.push(product)
        } else {
            console.log('Is Duplicated');
        }

    }

}

const productManager = new ProductManager()
console.log('First call', productManager.getProducts())

productManager.addproducts('Mouse Razer', 'Deathadder V2 Lite', 150, 'sin Imagen', '123abc', 30 )
productManager.addproducts('Mouse Logitech', 'MX Master 3', 200, 'sin Imagen', '123abc', 10 )
productManager.addproducts('Mouse Stell Serie', 'Aerox 5 Wireless', 400, 'sin Imagen', '124abc', 10 )
productManager.addproducts('Mouse Genius', 'DX-100', 20, 'sin Imagen', '123abc', 100 )

productManager.getProductByID(1)

console.log('After push', productManager.getProducts())