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
@Entity({
    name: "credentials"
})
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
}
