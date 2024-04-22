import { AppDataSource } from "../config/data-source";
import { userDto } from "../dto/user.dto";
import { User } from "../entities/user";
import { IUser } from "../interfaces/user";
import { ValidateCredential, createCredentialService } from "./credentialServices";

const user: IUser[] = [];

export const getUsersService = async () => {
  try {
   const users = await AppDataSource.getRepository(User).find();
   return users;
  } catch (error) {
    console.log(error)
  }
} 
export const getUserByIdService = async (
  id: number
): Promise<IUser | undefined> => {
  try {
    const data =  user.find((item) => item.id === id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserService = async (newUser: userDto): Promise<IUser> => {
  const credentials = await createCredentialService({
    username: newUser.name,
    password: newUser.password,
  });
  const { id } = credentials;
  const userCreated: IUser = {
    id: user.length + 1,
    name: newUser.name,
    email: newUser.email,
    nDni: 0,
    image: "",
    birthdate: new Date(),
    credentialsId: id,
  };
  user.push(userCreated);
  return userCreated;
};

export const loginUserService = async (login: userDto): Promise<IUser> => {
  const credentials = await ValidateCredential({
    username: login.name,
    password: login.password,
  });
  const userFound = user.find((user) => user.credentialsId === credentials);
  if (!userFound) {
    throw new Error("User not found");
  }
  return userFound;
}