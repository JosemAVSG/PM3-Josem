import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Credentials } from "./credential";
@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  name: string;
  @Column()
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
}

