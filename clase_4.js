const fs = require("fs")

class Container{
    constructor(archivo){
        this.archivo = archivo;
    }
    
    async save(obj) {
        try {
            let data = await this.getAll()
            obj.id = data.length + 1
            data.push(obj)
            await fs.promises.writeFile(this.archivo,JSON.stringify(data))
            console.log("Objeto guardado correctamente");
            return obj.id
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){
        try {
            let data = await this.getAll()
            let obj = data[id]
            if (obj) {
                return obj
            } else {
                console.log("Objeto no encontrado");
                return null
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            let data = await fs.promises.readFile(this.archivo, "utf-8")
            data = JSON.parse(data)
            return data
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id){
        try {
            let data = await listado.getAll()
            let dataFiltrada = data.filter(e => e.id !== id)
            for (let i = 0; i < dataFiltrada.length; i++) {
                const element = dataFiltrada[i]
                element.id = i + 1
            }
            await fs.promises.writeFile(this.archivo, JSON.stringify(dataFiltrada))
            console.log("Elemento borrado correctamente y nuevos IDs actualizados.");
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, "[]")
            console.log("Contenido borrado");
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Container




