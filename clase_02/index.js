const Container = require("./Container");
const container = new Container("products.json");


// defino funcion autoinvocada ejecutada por  unica vez
(async () => {	 
	const product = {name: "mate", price: 2000};
	console.log(await container.getAll());
	console.log(await container.save(product));
	console.log(await container.getAll());
	console.log(await container.save(product));
	console.log(await container.getAll());
})();
