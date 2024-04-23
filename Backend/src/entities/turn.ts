import { Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne } from "typeorm";
import { User } from "./user";
import { Horario } from "./horario";
import { Historial } from "./historial";
@Entity({ name: 'turn'} )
export class Turn {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: Date;
    @Column()
    time: Date;
    @Column()
    status: boolean;
    @ManyToOne(() => User, (user) => user.turns)
    user: User;
    @OneToMany(() => Horario, (horario) =>horario.turn )
    horario: Horario[]
    @OneToMany(() => Historial, historial => historial.turn)
    historials: Historial[]; 
}


