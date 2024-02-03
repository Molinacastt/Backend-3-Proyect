import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

const arroz = new Product("Arroz", "Rico", 1, 130, "A123");
const jabon = new Product("Jabon", "Limpia mucho", 2, 220, "B435");
const arena = new Product("Arena", "Para gatos", 1, 450, "C674");

const arroz2 = new Product("Arroz", "Rico", 14555, 15430, "A123");

const productManager = new ProductManager("./products.json");

// console.log(productManager.addProduct(jabon))
// productManager.getProducts()
// productManager.getProductsById('c51429a5006e')
// productManager.updateProducto("df5ccd61afce", producto1ver2)
// productManager.deleteProducto("d989e9242c71")
