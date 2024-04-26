import { AppDataSource } from "../config/data-source";
import { Horario } from "../entities/horario";

const horarioRepository = AppDataSource.getRepository(Horario);

export default horarioRepository;