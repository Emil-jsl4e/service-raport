import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from '../auth/dto/register.dto';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}
  //Servisants Technical
  @Get('admin/servisants')
  async servisants() {
    return this.userService.find({
      where: {
        isServisant: true,
      },
    });
  }

  @Post('admin/servisant/register')
  async register(@Body() body: RegisterDto, @Body('email') email: string) {
    const { passwordConfirm, ...data } = body;
    const user = await this.userService.findOne({ where: { email } });

    if (user) {
      throw new NotFoundException('Email is use! Try new email!');
    }

    if (body.password !== body.passwordConfirm) {
      throw new BadRequestException('Password do not match!');
    }

    const hashed = await bcrypt.hash(body.password, 12);

    return this.userService.save({
      ...data,
      password: hashed,
      isServisant: true,
    });
  }
}
