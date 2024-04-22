import { DataSource } from "typeorm";
import { User } from "../entities/user";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demosql",
    synchronize: true,
    logging: ["error"],
    entities: [User],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User);