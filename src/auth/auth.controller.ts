import { BadRequestException, Body, Controller, NotFoundException, Post } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { UserService } from "../user/user.service";
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {

  constructor(private userService: UserService) {
  }

  @Post('admin/register')
  async register(@Body() body: RegisterDto){
    const {passwordConfirm, ...data} = body;

    if (body.password !== body.passwordConfirm) {
      throw new BadRequestException('Password do not match!');
    }

    const hashed = await bcrypt.hash(body.password, 12);

    return this.userService.save({
      ...data,
      password: hashed,
      isServisant: false,
    });
  }

  @Post('admin/login')
  async login(
    @Body('email') email:string,
    @Body('password') password:string,
    )
  {
    const user = await this.userService.findOne({where: {email}});

    if(!user) {
      throw new NotFoundException('User is not found');
    }

    if(!await bcrypt.compare(password, user.password)){
      throw new BadRequestException('Password is invalid');
    }

    return user;
  }

}
