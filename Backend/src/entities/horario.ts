import  { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Turn } from "./turn";

@Entity("horario")
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    hora: string;
    @Column({ type: "enum", enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] })
    dia: string;
    @Column({ type: "time", default: "06:00:00" }) 
    horaLimite: string;
    @Column()
    estado: string;
    @ManyToOne(() => Turn, (turn) => turn.id)
    turn: Turn[];
}

