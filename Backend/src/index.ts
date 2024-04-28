import app from "./server";
import PORT from "./config/env";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import {
  preLoadUsersData,
  preloadCredentialsData,
} from "./helpers/preLoadData";

const initializeApp = async () => {
  try {
    await AppDataSource.initialize();
    await preLoadUsersData();
    await preloadCredentialsData();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(" Database connection error", error);
  }
};

initializeApp();