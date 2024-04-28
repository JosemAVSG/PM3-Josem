import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

const userRepository = AppDataSource.getRepository(User).extend({
  findbyId: async (id: number): Promise<User> => {
    const user = await userRepository.findOneBy({ id: id });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});

export default userRepository;
