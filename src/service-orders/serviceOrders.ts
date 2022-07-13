import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('serviceOrders')
export class ServiceOrders {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title:string;
  @Column()
  description: string;
  @Column({default: false})
  complete: boolean;
}