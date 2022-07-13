import { Module } from '@nestjs/common';
import { ServiceOrdersController } from './service-orders.controller';
import { ServiceOrdersService } from './service-orders.service';
import { ServiceOrderActivate } from "./serviceOrder-activate";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceOrders } from "./serviceOrders";

@Module({
  imports:[TypeOrmModule.forFeature([ServiceOrderActivate, ServiceOrders])],
  controllers: [ServiceOrdersController],
  providers: [ServiceOrdersService]
})
export class ServiceOrdersModule {}
