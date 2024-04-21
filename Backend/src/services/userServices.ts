
import userDto from "../dto/user.dto";
import  IUser  from "../interfaces/user";

const user: IUser[]  = [];

export const createUserService = async (userData: userDto  ) : Promise<IUser> => {
    
    const { name, password, email, estado } = userData;
    const newUser = { id: user.length + 1, name, password, email, estado };
    user.push(newUser);
    return newUser;
};
