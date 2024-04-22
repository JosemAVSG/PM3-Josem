import { Entity, PrimaryGeneratedColumn, Column, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
@Entity({
    name: "credentials"
})
export class Credentials {
  @PrimaryColumn()
  userId: number;
  @Column()
  username: string;
  @Column()
  password: string;
}

