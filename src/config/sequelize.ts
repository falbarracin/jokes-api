import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "jokesdb",
  "jokes",
  "jokes",
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
  }
);