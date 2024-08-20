import express from "express";
import { connectDB, syncModels } from "./config/db.config";

const app = express();

app.use(express.json());

connectDB();
syncModels();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
