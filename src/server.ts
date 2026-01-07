import app from "./app";
import { initDatabase } from "./database/init-db";

const PORT = 3000;

(async () => {
  try {
    await initDatabase();
 
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server", error);
    process.exit(1);
  }
})();