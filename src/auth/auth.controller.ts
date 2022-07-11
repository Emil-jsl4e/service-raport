import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
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
}
