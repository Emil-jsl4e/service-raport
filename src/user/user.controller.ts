import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

  constructor(private readonly userService: UserService) {
  }
  //Servisants Technical
  @Get('admin/servisants')
  async servisants(){
    return this.userService.find({where:{
      isServisant: true
    }});
  }
}
