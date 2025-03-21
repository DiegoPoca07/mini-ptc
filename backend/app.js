// Importo todo lo de la libreria de Express
import express from "express";
import clothes from "./src/routes/clothes.js";
import fragrance from "./src/routes/fragrancescontroller.js";
import category from "./src/routes/category.js";
import admi from  "./src/routes/admi.js";
import customern from "./src/routes/customerns.js";
import shoppingcart from "./src/routes/shoppingcart.js";
import orders from "./src/routes/orders.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/Ropa", clothes)
app.use("/api/fragancia", fragrance)
app.use("/api/category", category)
app.use("/api/admi", admi)
app.use("/api/customerns", customern)
app.use("/api/shoppingcart", shoppingcart)
app,use("/api/orders", orders)

// Exporto la constante para poder usar express en otros archivos
export default app;
