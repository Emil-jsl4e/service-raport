import { Body, Controller, Get, Post } from "@nestjs/common";
import { ServiceOrdersService } from "./service-orders.service";

import { ServiceOrders } from "./serviceOrders";


@Controller()
export class ServiceOrdersController {
  constructor(
    private serviceOrder: ServiceOrdersService
  ) {
  }

    @Get('admin/orders')
    all(){
      return this.serviceOrder.find({})
    }

  @Post('admin/orders')
  async register(@Body() body: ServiceOrders){
    const {title, description } = body;


    return this.serviceOrder.save({
      title: title,
      description: description,
    });
  }

}
