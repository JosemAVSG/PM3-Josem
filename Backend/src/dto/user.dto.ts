
export interface credentialDto {
    username: string;
    password: string;
    userId: number;
}

export interface userDto {
    name: string;
    email: string;
    password: string;
}
export interface appoimentDto {
    date: Date;
    time: Date;
    userId: number;
    status: boolean;
}