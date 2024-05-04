
import { loginDto, userDto } from "../dto/user.dto";
import { IUser } from "../interfaces/user";
import { User } from "../entities/user";
import { Credentials } from "../entities/credential";
import {
  ValidateCredential,
  createCredentialService,
} from "./credentialServices";
import userRepository from "../repositories/userRepository";

const user: IUser[] = [];

export const getUsersService = async (): Promise<User[] | undefined> => {

  try {
    const users : User[] | undefined = await userRepository.find({
      relations: {
        credentials: true,
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};
export const getUserByIdService = async (
  id: number
): Promise<User | null | undefined> => {
  try {  
    const data : User | null = await userRepository.findOneBy({  id: id });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserService = async (newUser: userDto): Promise<User | undefined> => {
 
  try{
    const userCreated = {
      name: newUser.name,
      email: newUser.email,
      nDni: newUser.nDni,
      image: "",
      birthdate: new Date(newUser.birthdate),
    };
  
    const users =  userRepository.create({...userCreated});
    const data = await userRepository.save(users);  
  
    const credentials: Credentials | void = await createCredentialService({
      username: newUser.username,
      password: newUser.password,
      userId: data.id, 
    });
  
    if(!credentials){
      throw new Error("Credentials not created");
    }
  
    return data;


  }catch(error){
    console.log(error);
  }
  

};

export const loginUserService = async (login: loginDto): Promise<User  |  Error> => {
      const { username, password } = login;
  try {
    const userVerified : User | undefined = await ValidateCredential({username, password});
    if(!userVerified){
      throw new Error("User not found");
    }
    return userVerified;
  } catch (error) {
    return  new Error("User not found");
  }


};
