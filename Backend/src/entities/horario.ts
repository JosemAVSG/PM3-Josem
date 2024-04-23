import  { Entity, PrimaryGeneratedColumn,OneToMany, Column, ManyToOne } from "typeorm";
import { Turn } from "./turn";

@Entity()
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    time: string;
    @Column({ type: "time", default: "06:00:00" }) 
    timeEnd: string;
    @OneToMany(() => Turn, (turn) => turn.id)
    turn: Turn[];
}

