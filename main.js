import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("Arroz", "Rico", 1, 130, "A123")
const producto2 = new Product("Jabon", "Limpia mucho", 2, 220, "B435")
const producto3 = new Product("Arena", "Para gatos", 1, 450, "C674")

const producto1ver2 = new Product("Arroz", "Rico", 14555, 15430, "A123")

const productManager = new ProductManager('./products.json')

// console.log(productManager.addProduct(producto2))
// productManager.getProducts()
// productManager.getProductsById('c51429a5006e')
// productManager.updateProducto("df5ccd61afce", producto1ver2)
productManager.deleteProducto("6a76c496f480")