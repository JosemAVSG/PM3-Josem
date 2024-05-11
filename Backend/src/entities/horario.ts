import  { Entity, PrimaryGeneratedColumn,OneToMany, Column, ManyToOne } from "typeorm";
import { Turn } from "./turn";

@Entity()
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "date" })
    date: Date;
    @Column({ type: "time"})
    time: Date;
    @OneToMany(() => Turn, (turn) => turn.horario)
    turns: Turn[];
}

