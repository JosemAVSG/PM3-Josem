import  { Entity, PrimaryGeneratedColumn,OneToMany, Column, ManyToOne } from "typeorm";
import { Turn } from "./turn";

@Entity()
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    time: Date;
    @Column({ type: "time", default: "06:00:00" }) 
    timeEnd: Date;
    @OneToMany(() => Turn, (turn) => turn.horario)
    turns: Turn[];
}

