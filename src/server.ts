import app from "./app";
import { sequelize } from "./config/sequelize";

const PORT = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 

    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server", error);
    process.exit(1);
  }
})();