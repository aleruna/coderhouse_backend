const fs = require('fs').promises;

class Container {  
	
	constructor(filename) {
		this.filename = filename;
		this.existFilename = null;
	}

	// lee el archivo y retorna la lista de productos 
	// retornar objeto
	async getAll(){
		try {
			const productList = await fs.readFile(this.filename, "utf-8");
			this.existFilename = true;
			return productList;
		} catch {
			return this.existFilename = false;
		}
	}
	
	// guarda el nuevo producto y asigna un id
	// guardar el objeto
	async save(product) {
		// a traves del parametro prod ingresar prod
		// leer ultimo id: extraer id de la lista de productos
		// extraer el ultimo id
		// si esta vacio poner asignar id:1
		// si no esta vacio incrementar ultimo id en 1
		// asignarlo al nuevo producto
		// incorporar producto a la lista
		if(this.existFilename){
			const productList = await this.getAll();
			if (productList.lenght === 0){
				product.id = 1;
				await fs.writeFile(this.filename,product);
				return product.id;
			}

			if(productList.lenght > 0 ){
				const IDList =  productList.map(product => product.id);
				const lastID = IDList.pop();
				product.id = lastID++;
				await fs.writeFile(this.filename,product);
				return product.id;
			}
		} 

		if(!this.existFilename){
			await fs.writeFile(this.filename, "[]");
			return "se ha creado el archivo. Intente de nuevo"
		}
	
		this.existFilename = null;
	}
	
	// busca y devuelve el proucto  por el id
	// devolver un objeto especifico
	getByID(idProduct) {
		// leer la lista de productos
		// buscar dentro de la lista por clave id
		// devolver el producto elegido por id
	}
	
	// busca y borra el producto por el id
	// borrar objeto especifico
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
