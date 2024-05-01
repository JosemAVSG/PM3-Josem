export interface IUser {

    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    credentials: {
        username: string;
        password: string;
    };
}
export interface IUserLogin {
    email: string;
    password: string;
}