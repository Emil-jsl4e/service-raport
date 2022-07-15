import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceOrderActivate } from "./serviceOrder-activate";

@Entity()
export class ServiceOrders {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title:string;
  @Column()
  description: string;
  @Column({default: false})
  complete: boolean;
  @OneToMany(() => ServiceOrderActivate, serviceOrderActivate => serviceOrderActivate.serviceOrders)
  serviceOrderActivate: ServiceOrderActivate[];
}