import { credentialDto } from "../dto/user.dto";
import { ICredential } from "../interfaces/credential";

const credentials: ICredential[] = [];

export const createCredentialService = async ( credentiales: credentialDto ) : Promise<ICredential>  => {

    const { username, password } = credentiales;
    const newCredential = { id: credentials.length + 1, username, password };
    credentials.push(newCredential);
    return newCredential;  
};

export const ValidateCredential = async ( credentiales: credentialDto) => {

    const findCredential = credentials.find( credential => credential.username === credentiales.username);

    if( findCredential && findCredential.password ===  credentiales.password ){
        return findCredential.id;
    }
    return null;

};



