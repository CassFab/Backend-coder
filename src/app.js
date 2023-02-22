import express from "express";
import ProductManager from "./productManager.js";

const app = express();
const manager = new ProductManager("./productos.json");

app.get("/", (req, res) => {
  res.send("<p>Hello World!</p>");
});

app.get("/products", async (req, res) => {
    let products = await manager.getProducts();
    let { limit } = req.query;
    if (limit) {
      products = products.slice(0, limit);
    }
    res.send(products);
  });
  

app.get("/products/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let product = await manager.getProductById(id);
        res.send(product);
    } catch (error) {
        res.status(404).send(error.message);
    }
});
  

app.listen(8080, () => console.log(`Server listening to port 8080`));

























/* import express from "express";

import ProductManager from "./productManager.js";

const manager = new ProductManager("./products.json");






const app = express();

app.get("./products", async (req, res) => {

    try{
        const products = await manager.getProducts()
        const {limit} = req.query

        if {limit}{
            products.length = limit
            return res.send{products}
        }

        res.send(products)
    } catch (err){
        res.status(404).send(`${err}`)
    }
});

app.get("/products/:ID", async (req, res) => {

    try{
        const {ID} = req.params
        const product = await manager.getProductById(parseInt(ID))
        res.send(product)
    } catch (err) {
        res.status(404).send(`${err}`)
    }
});

app.listen(8080, () => {
    console.log("Servidor escuchando desde 8080.")
}); */