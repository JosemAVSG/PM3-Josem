import credentialRepository from "../repositories/credentialRepository";
import userRepository from "../repositories/userRepository";
import { credentialDto, loginDto } from "../dto/user.dto";
import { Credentials } from "../entities/credential";
import { ICredential } from "../interfaces/credential";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import { hash, isValidPassword } from "../helpers/hash";

// const credentials: ICredential[] = [];

export const createCredentialService = async (  credentiales: credentialDto): Promise<Credentials | void> => {
  const { username, password, userId } = credentiales;
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    queryRunner.startTransaction();

    const user = await userRepository.findById(userId);
    const passwordhashed = await hash(password);

    const newCredential = credentialRepository.create({
      username,
      password: passwordhashed,
      id: userId,
    });
    await queryRunner.manager.save(newCredential);

    if (user) {
      user.credentials = newCredential;
      await queryRunner.manager.save(user);
    
      await queryRunner.commitTransaction();

      return newCredential;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error:" + error);
  } finally {
    await queryRunner.release();
  }
};

export const ValidateCredential = async (
  credentiales: loginDto
): Promise<User | undefined> => {
  const { username, password } = credentiales;
  
  
  try {
    const foundcredentials = await credentialRepository.findOneBy({
      username: username,
    });
   
    
    if (!foundcredentials) {
      throw new Error("Credentials not found");
    }
    const { id } = foundcredentials;
    const findUser = await userRepository.find({
      where: { credentials: { id: id } },
      relations: { credentials: true },})
    console.log(findUser.map((user) => user));
    
    if (!findUser) {
      throw new Error("User not found");
    }
    const credentials = findUser[0].credentials;
     console.log("credenciales", credentials);
      
    const truePassword = await isValidPassword(password, credentials.password);
   
    console.log(truePassword);
    
    if (truePassword === false ) {
      throw new Error("Password not valid");
    }else{
      return findUser[0];
    }
  } catch (error) {
    throw Error("Error:" + error);
  }
};
