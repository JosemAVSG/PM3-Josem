import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user";
@Entity({
    name: "credentials"
})
export class Credentials {
  @OneToOne(() => User, (user) => user.credentialsId)
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
}

