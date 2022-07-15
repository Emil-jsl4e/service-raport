import { Body, Controller, Get, Post } from "@nestjs/common";
import { ServiceOrderActivate } from "./serviceOrder-activate";
import { ServiceOrderActivateService } from "./serviceOrder-activate.service";

@Controller()
export class ServiceOrdersActivateController {
  constructor(
    private serviceOrderActivate: ServiceOrderActivateService
  ) {
  }

    @Get('admin/ordersActive')
    all(){
      return this.serviceOrderActivate.find({})
    }

     @Post('admin/ordersActive')
     async register(@Body() body: ServiceOrderActivate){
     const {servisantFirstName, servisantLastName, description, serviceOrders } = body;

     return this.serviceOrderActivate.save({
       servisantFirstName: servisantFirstName,
       servisantLastName: servisantLastName,
       description: description,
       serviceOrders: serviceOrders,
    });
  }
}
