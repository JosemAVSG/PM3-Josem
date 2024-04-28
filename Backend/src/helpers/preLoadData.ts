import { log } from "console";
import { AppDataSource } from "../config/data-source";
import credentialRepository from "../repositories/credentialRepository";
import userRepository from "../repositories/userRepository";

const preloadedUsers = [
  {
    id: 1,
    name: "admin",
    email: "admin@admin",
    birthdate: new Date(),
    nDni: 12345678,
    image: "",
  },
  {
    id: 2,
    name: "user",
    email: "user@user",
    birthdate: new Date(),
    nDni: 12345678,
    image: "",
  },
  {
    id: 3,
    name: "user2",
    email: "user2@user2",
    birthdate: new Date(),
    nDni: 12345678,
    image: "",
  },
  {
    id: 4,
    name: "user3",
    email: "user3@user3",
    birthdate: new Date(),
    nDni: 12345678,
    image: "",
  },
];
const preloadedCredentials = [
  {
    id:1,
    username: "admin",
    password: "admin",
  },
  {
    id:2,
    username: "user",
    password: "user",
  },
  {
    id:3,
    username: "user2",
    password: "user2",
  },
  {
    id:4,
    username: "user3",
    password: "user3",
  },
];
export const preLoadUsersData = async () => {
  const queryRunner = AppDataSource.createQueryRunner();

  try {
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const usersfound = await userRepository.find(); // Assuming User is your entity name

    if (usersfound.length) {
      console.log("No se hizo la precarga");
      return;
    }
    const promise = preloadedUsers.map(async (user) => {
      const newUser = userRepository.create(user);
      await queryRunner.manager.save(newUser);
    })

    await Promise.all(promise);
    await queryRunner.commitTransaction();
    console.log("Se ha creado la precarga de usuarios");
  } catch (error) {
    console.log("Error en la precarga de usuarios", error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};



export const preloadCredentialsData = async () => {
  const queryRunner = AppDataSource.createQueryRunner();
  
  try {
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const promises = preloadedCredentials.map(async (credential) => {
      const newCredential = credentialRepository.create(credential);
      await queryRunner.manager.save(newCredential);

      const user = await userRepository.findOneBy({ id: credential.id});
    
      if (!user) {
        throw new Error("User not found");
      } else {
        user.credentials = newCredential;
        await queryRunner.manager.save(user);
      }
    });

    await Promise.all(promises);
    await queryRunner.commitTransaction();
    console.log("Se ha creado la precarga de credenciales");
  } catch (error) {
    console.log("Error en la precarga de credenciales", error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};


// export const preLoadUsersData = async () => {
//   AppDataSource.manager.transaction(async (transactionalEntityManager) => {
//     const usersfound = await userRepository.find();
//     if (usersfound.length) return console.log("No se hizo la precarga");

//     for await (const user of preloadedUsers) {
//       const newUsers =  userRepository.create(user);
//       await transactionalEntityManager.save(newUsers);
//     }
//   });
//   console.log("Se ha creado la precarga de usuarios");
// };

// export const preloadCredentialsData = async () => {

//   const queryRunner = AppDataSource.createQueryRunner();
//   await queryRunner.connect();

//   try {
//     await queryRunner.startTransaction();
  
//     for await (const credential of preloadedCredentials) {
//       const newCredential = credentialRepository.create(credential);
//       await queryRunner.manager.save(newCredential);
      
//     }

//     const promises = preloadedCredentials.map( async (credential) => {

//     const newCredential = credentialRepository.create(credential);
//     await queryRunner.manager.save(newCredential);
    
//     const user = await userRepository.findOneBy({ id: credential.id});
//      console.log(user);
//     if (!user) {
//       console.log("User not found");
//     }else{
//       user.credentials = newCredential;
//       await queryRunner.manager.save(user);
//     }

//   });
//     await Promise.all(promises);

//     await queryRunner.commitTransaction();    
//     console.log("Se ha creado la precarga de credenciales");
//   } catch (error) {
//     await queryRunner.rollbackTransaction();
//     console.log("Error en la precarga de credenciales", error);
//   } finally {
//     await queryRunner.release();
//   }
//   console.log("Se ha creado la precarga de credenciales");
// }
