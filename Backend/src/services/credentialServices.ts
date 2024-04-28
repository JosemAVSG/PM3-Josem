import credentialRepository from "../repositories/credentialRepository";
import userRepository from "../repositories/userRepository";
import { credentialDto, loginDto } from "../dto/user.dto";
import { Credentials } from "../entities/credential";
import { ICredential } from "../interfaces/credential";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

const credentials: ICredential[] = [];

export const createCredentialService = async ( credentiales: credentialDto ) : Promise<Credentials | undefined >  => {
    const { username, password, userId } = credentiales;
     const queryRunner =  AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
           
        queryRunner.startTransaction();

        const user = await userRepository.findOneBy({ id: userId });

        const newCredential = credentialRepository.create({ username, password , id: userId });
        await queryRunner.manager.save(newCredential);
      
        if (user){
            user.credentials = newCredential
            await queryRunner.manager.save(user);

            await queryRunner.commitTransaction();

            return newCredential;
        }else{
            throw new Error("User not found");
        }
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Error("Error:" + error);
    }finally{
        await queryRunner.release();
    }

};

export const ValidateCredential = async ( credentiales: loginDto) : Promise<User | undefined> => {
        const {email, password} = credentiales;

   try {
    const findUser = await userRepository.findOneBy({email: email});
    if(!findUser){
        throw new Error("User not found");
    }
    const credentials =  findUser.credentials;

    if(credentials && credentials.password === password){
        return findUser;
    } 
   } catch (error) {
    throw Error("Error:" + error);
   } 

};



