import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Turn {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: Date;
    @Column()
    time: Date;
    @Column()
    userId: number;
    @Column()
    status: boolean;
}