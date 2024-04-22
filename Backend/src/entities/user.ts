import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
  @Column("integer")
  credentialsId: number;
}

// export interface IUser {
//     id: number
//     name: string
//     email: string
//     birthdate: Date
//     nDni: number
//     image: string
//     credentialsId: number
// }
