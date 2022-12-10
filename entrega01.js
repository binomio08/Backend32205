const fs = require('fs')

class ProductManager {

    constructor(path) {
        this.path = path
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        }
        return []
    }

    getNextID = list => {
        const count = list.length
        return (count > 0) ? list[count - 1].id +1 : 1
    }

    write = list => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getProducts = async () => {
        const data = await this.read()

        return data
    }

    addProducts = async (obj) => {
        const list = await this.read()
        const nextID = this.getNextID(list)
        obj.id = nextID

        list.push(obj)

        await this.write(list)
    }


}

module.exports = ProductManager

