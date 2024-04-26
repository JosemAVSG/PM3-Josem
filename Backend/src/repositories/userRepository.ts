import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
