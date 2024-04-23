import { Entity,  Column, PrimaryColumn } from "typeorm";
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

