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
  @Column({ unique: true })
  email: string;
  @Column()
  birthdate: Date;
  @Column("integer")
  nDni: number;
  @Column("bytea")
  image: string;
  @OneToOne(() => Credentials, (credentials) => credentials.id)
  @JoinColumn({ name: "credentialsId" })
  credentialsId: number;
}

