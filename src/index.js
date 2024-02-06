

import express from "express";
import { ProductManager } from "./config/ProductManager.js";

const app = express();
const PORT = 9001;
const productManager = new ProductManager("./products.json");

app.get("/", (req, res) => {
  res.send("Hola desde mi primer servidor en express");
});

app.get("/products", async (req, res) => {
  const { limit } = req.query; //limit va entre llaves porque solo se esta solicitando uno, se pueden solicitar varios queries.
  const prods = await productManager.getProducts();
  const limite = parseInt(limit);

  if (limite) {
    if (limite < 0) {
      res.send("Ingrese un valor valido para las queues");
    } else {
      const prodsLimit = prods.slice(0, limit);
      res.send(prodsLimit);
    }
  } else {
    res.send("Ingrese un valor valido en los queries");
  }
});

// : significa que es modificable, podria ser cualquier cosa
app.get("/products/:pid", async (req, res) => {
  const pidProduct = req.params.pid;
  const prod = await productManager.getProductsById(pidProduct);
  res.send(prod);
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
