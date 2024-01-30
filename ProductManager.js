import { promises as fs } from "fs";

export class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async addProduct(newProduct) {
    const prods = JSON.parse(await fs.readFile(this.path, "utf-8"));
    if (
      newProduct.code &&
      newProduct.id &&
      newProduct.tittle &&
      newProduct.description &&
      newProduct.price &&
      newProduct.thumbnail &&
      newProduct.code &&
      newProduct.stock
    ) {
      const indice = prods.findIndex((prod) => prod.code === newProduct.code);
      console.log(indice);
      if (indice === -1) {
        prods.push(newProduct);
        await fs.writeFile(this.path, JSON.stringify(prods));
        console.log("Producto agregado correctamente");
      } else {
        console.log("El producto ya existe");
      }
    } else {
      console.log(
        "Debes ingresar un producto con todas las propiedades requeridas"
      );
    }
  }

  async getProducts() {
    const prods = JSON.parse(await fs.readFile(this.path, "utf-8"));
    console.log(prods);
  }

  async getProductsById(id) {
    const prods = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = prods.find((producto) => producto.id === id);
    if (prod) console.log(prod);
    else console.log("Producto no existente");
  }

  async updateProducto(id, newProduct) {
    const prods = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const indice = prods.findIndex((producto) => producto.id === id);
    if (indice != -1) {
      prods[indice].stock = newProduct.stock;
      prods[indice].tittle = newProduct.tittle;
      prods[indice].thumbnail = newProduct.thumbnail;
      prods[indice].code = newProduct.code;
      prods[indice].price = newProduct.price;
      prods[indice].description = newProduct.description;
      prods[indice].id = newProduct.id;
      await fs.writeFile(this.path, JSON.stringify(prods));
      console.log("Producto actualizado correctamente");
    } else {
      console.log("Producto no existente");
    }
  }

  async deleteProducto(id) {
    const prods = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const indice = prods.findIndex((producto) => producto.id === id);
    if (indice != -1) {
      const prodFiltrados = prods.filter((prod) => prod.id != id);
      await fs.writeFile(this.path, JSON.stringify(prodFiltrados));
      console.log("Producto eliminado correctamente");
    } else {
      console.log("Producto no existente");
    }
  }
}
