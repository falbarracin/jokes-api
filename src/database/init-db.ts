import { sequelize } from "../config/sequelize";
import "../models"; 

export const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB conectada");

    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados");
  } catch (error) {
    console.error(" Error al conectar DB", error);
    process.exit(1);
  }
};