import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/credential";


const credentialRepository = AppDataSource.getRepository(Credentials);

export default credentialRepository;
