import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user";
import { Turn } from "./turn";

@Entity()
export class Historial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaHora: Date;

    @OneToMany(() => Turn, turn => turn.historial)
    turns: Turn[];
}


