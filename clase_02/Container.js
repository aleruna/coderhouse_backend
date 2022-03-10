const fs = require('fs').promises;

class Container {  
	
	constructor(filename) {
		this.filename = filename;
		this.existFilename = null;
		this.data = [] 
	}

	async getAll(){
		try {
			const productList = await fs.readFile(this.filename, "utf-8");
			this.existFilename = true;
			return productList;
		} catch {
			return this.existFilename = false;
		}
	}
	
	async save(product) {
		const productList = await this.getAll();
		this.data.push[productList]
		if(this.existFilename){
			if (this.data.length === 0){
				product.id = 1;
				await fs.writeFile(this.filename,JSON.stringify(product));
				return product.id;
			}

			if(this.data.length > 0 ){
				const IDList =  this.data.map(a => a.id);
				const lastID = IDList.pop();
				product.id = lastID + 1 ;
				await fs.writeFile(this.filename,JSON.stringify(product));
				return product.id;
			}
		} 

	
	}
	
	async getByID(idProduct) {
		const productList = await this.getAll();
		const list = []
		list.push[productList]
		const productByID = list.find((item) => item.id == idProduct);
		return productByID
		} 

	deleteByID(idProduct) {
		// leer la lista
		// buscar dentro de la lista por clave id
		// borrar el producto elegido por id
	}
	
	// borra toda la lista
	// borrar fichero
	deleteAll() {
		// borrar la lista de productos: contenido o fichero
	}
}

//estoy trabajando con common js entonces uso : 
module.exports = Container;
//si estoy trabajando con Esmodules tengo que indicarlo en el package.jon
//y se exporta : export defautl Contenedor 
