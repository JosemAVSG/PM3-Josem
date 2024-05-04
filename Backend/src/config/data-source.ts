import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Credentials } from "../entities/credential";
import { Turn } from "../entities/turn";
import { Historial } from "../entities/historial";
import { Horario } from "../entities/horario";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demosql",
    // dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credentials, Turn, Historial, Horario],
    subscribers: [],
    migrations: [],
})
