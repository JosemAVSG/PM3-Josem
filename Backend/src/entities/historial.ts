import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { Turn } from "./turn";

@Entity()
export class Historial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    evento: string;

    @Column({ type: "text", nullable: true })
    descripcion: string;

    @Column()
    fechaHora: Date;

    @Column()
    estadoAnterior: string;

    @Column()
    estadoNuevo: string;

    // @ManyToOne(() => User, user => user.historials)
    // user: User;

    // @ManyToOne(() => Turn, turn => turn.historials)
    // turn: Turn;
}


