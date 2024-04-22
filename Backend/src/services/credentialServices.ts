import { credentialModel, userModel } from "../config/data-source";
import { credentialDto } from "../dto/user.dto";
import { Credentials } from "../entities/credential";
import { ICredential } from "../interfaces/credential";

const credentials: ICredential[] = [];

export const createCredentialService = async ( credentiales: credentialDto ) : Promise<Credentials | undefined >  => {
    try {
        
        const { username, password, userId } = credentiales;

        const user = await userModel.findOneBy({ id: userId });

        if (!user) {
            throw new Error("User not found");
        }
        user.credentials= credentiales
        await userModel.save(user);

        const newCredential = credentialModel.create({ username, password , userId });
        const data = await credentialModel.save(newCredential);
        return data;
    } catch (error) {
        console.log(error);
    }

};

export const ValidateCredential = async ( credentiales: credentialDto) => {

    const findCredential = credentials.find( credential => credential.username === credentiales.username);

    if( findCredential && findCredential.password ===  credentiales.password ){
        return findCredential.id;
    }
    return null;

};



