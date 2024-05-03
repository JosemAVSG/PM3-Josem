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
    username: string;
    password: string;
}