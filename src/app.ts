import express from "express";
import jokesRoutes from "./routes/jokes.routes";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import yaml from "yaml";
import path from "path";

const app = express();
app.use(express.json());

// swaggerDocument
const swaggerPath = path.join(__dirname, "../doc/swagger_jokes_api.yaml");

// Leemos y parseamos el YAML
const file = fs.readFileSync(swaggerPath, "utf8");
const swaggerDocument = yaml.parse(file);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de la API
app.use("/jokes", jokesRoutes);

// Middleware de errores
app.use(errorHandler);

export default app;