import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('files')
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  filepath: string;
}
