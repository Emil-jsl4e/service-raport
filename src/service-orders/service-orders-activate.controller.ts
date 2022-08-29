import { Body, Controller, Get, NotFoundException, Post } from "@nestjs/common";
import { ServiceOrderActivate } from "./serviceOrder-activate";
import { ServiceOrderActivateService } from "./serviceOrder-activate.service";
import { ServiceOrdersService } from "./service-orders.service";

@Controller()
export class ServiceOrdersActivateController {
  constructor(
    private serviceOrderActivate: ServiceOrderActivateService,
    private serviceOrdersService: ServiceOrdersService
  ) {
  }

    @Get('admin/ordersActive')
    all(){
      return this.serviceOrderActivate.find({})
    }

     @Post('admin/ordersActive')
     async register(@Body() body: ServiceOrderActivate){
     const {servisantFirstName, servisantLastName, description, serviceOrders } = body;
     //   try {
     // const id = serviceOrders;
     //   const user = await this.serviceOrdersService.find({where: {id}});
     //   console.log(user);
     //
     //   }
     //   catch (e) {
     //     return e.message
     //   }
       const id = serviceOrders;
       if (await this.serviceOrdersService.findOne({where: {id}})) {
         console.log("Id is ok ");
       }
       throw new NotFoundException('Id is not found');

       //TODO dodac walidacje ta nie działa sprawdzania czy zadanie z innej listy istnieje

    //  return this.serviceOrderActivate.save({
    //    servisantFirstName: servisantFirstName,
    //    servisantLastName: servisantLastName,
    //    description: description,
    //    serviceOrders: serviceOrders,
    // });
  }

}
