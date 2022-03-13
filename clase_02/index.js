const Container = require("./Container");

(async function () {
  const mate = { name: "mate", price: 2000 };
  const termo = { name: "termo", price: 3000 };
  const bombilla = { name: "bombilla", price: 300 };

  const container = new Container("products.json");

  console.log(await container.getAll());

  //Guardamos algunos objetos
  console.log(await container.save(mate));
  console.log(await container.save(termo));
  console.log(await container.save(bombilla));

  items = await container.getAll();
  console.log(items);

  x = await container.getById(1);
  console.log(`"${JSON.stringify(x)}"`);

  await container.deleteById(1);
  await container.deleteAll();
})();
