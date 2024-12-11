import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_9ec886924bcd97ae6f14220017", ["user"], { unique: true })
@Entity("user", { schema: "blog" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "user", unique: true, length: 255 })
  user: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;
}
