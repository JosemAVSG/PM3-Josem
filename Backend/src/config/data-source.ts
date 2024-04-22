import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Credentials } from "../entities/credential";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demosql",
    dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credentials],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credentials);