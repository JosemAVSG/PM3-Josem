import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

const userRepository = AppDataSource.getRepository(User).extend({
    findById:async function (id:number):Promise<User> {
        const user = await this.findOneBy({id:id});
        if(!user){
            throw new Error("User not found");
        }
        return user;
    }
});

export default userRepository;
