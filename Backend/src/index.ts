import app from "./server";
import PORT from "./config/env";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then((res) => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(" Database connection error", error));
