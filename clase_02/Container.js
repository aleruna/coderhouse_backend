const fs = require("fs");

class Container {
  constructor(filename) {
    //Armo Constructor
    this.filename = filename; //Asigno nombre de archivo
    this.data = [];
  }

  async getAll() {
    try {
      const list = await fs.promises.readFile(this.filename, "utf-8");
      return JSON.parse(list);
    } catch (err) {
      console.log("List don't create");
      return null;
    }
  }

  async save(obj) {
    try {
      if (!fs.existsSync(this.filename)) {
        try {
          obj.id = 1;
          this.data.push(obj);
          await fs.promises.writeFile(this.filename, JSON.stringify(this.data));
          console.log(`add "${obj.name}" to "${this.filename}"`);
          return obj.id;
        } catch (err) {
          console.log(`Error to create file`);
        }
      } else {
        try {
          this.data = await this.getAll();
          const IDList = this.data.map((a) => a.id);
          const lastID = IDList.pop();
          obj.id = lastID + 1;
          this.data.push(obj);
          await fs.promises.writeFile(this.filename, JSON.stringify(this.data));
          console.log(`add "${obj.name}" with "${obj.id}"`);
          return obj.id;
        } catch (err) {
          console.log(`error to create file`);
        }
      }
    } catch (err) {
      console.log(`Error `);
    }
  }

  async getById(id) {
    try {
      const x = await this.getAll();
      return x.find((obj) => obj.id == id);
    } catch (err) {
      console.log(`Error`);
    }
  }

  //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
  async deleteById(id) {
    var x = await this.getAll();
    let y = x.findIndex((obj) => obj.id == id);
    x.splice(y, 1);
    await fs.promises.writeFile(this.filename, JSON.stringify(x));
    console.log("Delete complete");
  }

  async deleteAll() {
    fs.unlink(this.filename, (err) => {
      if (err) {
        console.log(`error in delete "${this.filename}"`);
      } else {
        console.log(`delete succes "${this.filename}" `);
      }
    });
  }
}

module.exports = Container;
