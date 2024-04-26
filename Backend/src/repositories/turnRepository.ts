import { AppDataSource } from "../config/data-source";
import { Turn } from "../entities/turn";

const turnRepository = AppDataSource.getRepository(Turn);

export default turnRepository;

