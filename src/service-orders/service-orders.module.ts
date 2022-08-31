import { Module } from '@nestjs/common';
import { ServiceOrdersController } from './service-orders.controller';
import { ServiceOrdersService } from './service-orders.service';
import { ServiceOrderActivate } from './serviceOrder-activate';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOrders } from './serviceOrders';
import { ServiceOrderActivateService } from './serviceOrder-activate.service';
import { ServiceOrdersActivateController } from './service-orders-activate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOrderActivate, ServiceOrders])],
  controllers: [ServiceOrdersController, ServiceOrdersActivateController],
  providers: [ServiceOrdersService, ServiceOrderActivateService],
})
export class ServiceOrdersModule {}
