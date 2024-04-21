
import {userDto} from "../dto/user.dto";
import  {IUser}  from "../interfaces/user";
import  { createCredentialService} from './credentialServices'
const user: IUser[]  = [];

export const getUsers = (): IUser[] => user;

export const getUserById = (id: number): IUser | undefined => user.find((item) => item.id === id);

export const createUserService = async (newUser: userDto): Promise<IUser> => {
    
    const credentialsId = await createCredentialService ({
        username: newUser.name,
        password: newUser.password,
    });
    const {id}= credentialsId;
    const userCreated: IUser = {
        ...newUser,
        id: user.length + 1,
        name: newUser.name,
        email: newUser.email,
        nDni: 0,
        image: "",
        birthdate: new Date(),
        credentialsId: id
    };
    user.push(userCreated);
    return userCreated;
};
