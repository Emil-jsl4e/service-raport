import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service';

import { ServiceOrders } from './serviceOrders';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class ServiceOrdersController {
  constructor(private serviceOrder: ServiceOrdersService) {}

  @Get('admin/orders')
  all() {
    return this.serviceOrder.find({
      relations: ['serviceOrderActivate'],
    });
  }

  @Post('admin/orders')
  async register(@Body() body: ServiceOrders) {
    const { title, description, complete } = body;

    return this.serviceOrder.save({
      title: title,
      description: description,
      complete: complete,
    });
  }
  @Put('admin/orders/:id')
  async update(
    @Param('id') id: number,
    @Req() request: Request,
    @Body('complete') complete: boolean,
  ) {
    await this.serviceOrder.update(id, {
      complete,
    });
    return this.serviceOrder.findOne({ where: { id } });
  }
}
