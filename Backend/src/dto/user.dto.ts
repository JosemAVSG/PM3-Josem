
export interface credentialDto {
    username: string;
    password: string;
    userId: number;
}

export interface userDto {
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    username: string;
    password: string;
}

export interface loginDto{
    username: string;
    password: string;
}
export interface appoimentDto {
    dia: Date ;
    time: string;
    description: string;
    userId: number;
    status: boolean;
}
export interface horarioDto {
    date: Date;
    time: string;
    idturn:number;
}

export interface historialDto{
    idturn: number;
}