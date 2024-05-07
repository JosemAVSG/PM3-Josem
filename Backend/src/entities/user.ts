import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credentials } from "./credential";
import { Turn } from "./turn";
import { Historial } from "./historial";
@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  birthdate: Date;
  @Column("integer")
  nDni: number;
  @Column("bytea")
  image: string;
  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;
  @OneToMany(() => Turn, turn => turn.user)
  turns: Turn[];
  @OneToOne(() => Historial)
  @JoinColumn()
  historial: Historial;
}

