import { Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne } from "typeorm";
import { User } from "./user";
import { Horario } from "./horario";
import { Historial } from "./historial";
@Entity({ name: 'turn'} )
export class Turn {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: boolean;
    @Column()
    description: string;
    @ManyToOne(() => User, (user) => user.turns)
    user: User;
    @ManyToOne(() => Horario, (horario) =>horario.turns )
    horario: Horario;
    // @OneToMany(() => Historial, historial => historial.turn)
    // historials: Historial[]; 
 
}


