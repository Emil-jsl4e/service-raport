import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiceOrders } from "./serviceOrders";

@Entity()
export class ServiceOrderActivate{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  servisantFirstName: string;
  @Column()
  servisantLastName: string;
  @Column()
  description: string;
  @ManyToOne(() => ServiceOrders, serviceOrders => serviceOrders.serviceOrderActivate)
  @JoinColumn({name: 'serviceOrdersId'})
  serviceOrders: ServiceOrders;
}