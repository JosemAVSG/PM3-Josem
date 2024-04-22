import { userModel } from "../config/data-source";
import { userDto } from "../dto/user.dto";
import { IUser } from "../interfaces/user";
import { User } from "../entities/user";
import { Credentials } from "../entities/credential";
import {
  ValidateCredential,
  createCredentialService,
} from "./credentialServices";

const user: IUser[] = [];

export const getUsersService = async (): Promise<User[] | undefined> => {
  try {
    const users : User[] | undefined = await userModel.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
export const getUserByIdService = async (
  id: number
): Promise<User | null | undefined> => {
  try {
    const data : User | null = await userModel.findOneBy({ id: id });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserService = async (newUser: userDto): Promise<User> => {

  const credentials: Credentials | undefined = await createCredentialService({
    username: newUser.name,
    password: newUser.password,
  });

  if(!credentials){
    throw new Error("Credentials not created");
  }
  const {id} = credentials;

  const userCreated: User = {
    id: user.length + 1,
    name: newUser.name,
    email: newUser.email,
    nDni: 0,
    image: "",
    birthdate: new Date(),
    credentialsId: id
  };
  const users = userModel.create(userCreated);
  const data = await userModel.save(users);
  return data;
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
};
