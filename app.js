import express from "express";
import router from "./router.js";

const app = express();
const puerto = parseInt(process.env.PORT) || 3000;

app.use(express.json());
app.use(router);

app.listen(puerto, () => {
    console.log("Servidor escuchando en el puerto: " + puerto);
});