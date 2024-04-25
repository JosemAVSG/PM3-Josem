
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
    dia: string ;
    time: Date;
    timeEnd: Date;
    description: string;
    userId: number;
    status: boolean;
}
export interface horarioDto {
    date: string;
    time: Date;
    timeEnd: Date;
    idturn:number;
}

export interface historialDto{
    idturn: number;
}