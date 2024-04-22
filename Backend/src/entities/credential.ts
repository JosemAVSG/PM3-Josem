import { Entity, PrimaryGeneratedColumn, Column, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
@Entity({
    name: "credentials"
})
export class Credentials {
  @PrimaryColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
}

