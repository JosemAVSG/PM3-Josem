import { AppDataSource } from "../config/data-source";
import { Historial } from "../entities/historial";

const historialRepository = AppDataSource.getRepository(Historial);

export default historialRepository;
