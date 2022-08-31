import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class spareParts {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
}
